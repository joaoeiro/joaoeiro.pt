/**
 * Contact form for joaoeiro.pt — runs as a Google Apps Script web app on João's Google account.
 *
 * For every message sent from the site's contact form it:
 *   1. emails João the answers (replying goes straight to the visitor when they left an email);
 *   2. sends the visitor a thank-you email from João's Gmail, with a copy of what they wrote
 *      (only when they chose "Email" as the way to reach them);
 *   3. keeps a copy in a Google Sheet called "Contactos do site", in case an email goes astray.
 *
 * Setup (once): see "Contact form" in the README. After changing this file in script.google.com,
 * use Deploy → Manage deployments → Edit → Version: New version, so the site's link keeps working.
 */

const CONFIG = {
  // Where the messages go. Leave empty to use the Google account that runs the script.
  to: '',
  // Name shown as the sender of the thank-you email.
  senderName: 'João Eiró',
  // Thank-you email, in the visitor's language. {name} becomes the visitor's first name.
  reply: {
    pt: {
      subject: 'Recebi a tua mensagem',
      greeting: 'Olá {name},',
      body: 'Obrigado pelo teu contacto! Recebi a tua mensagem e respondo-te assim que puder.',
      copy: 'Fica aqui uma cópia do que enviaste:',
      signoff: 'Um abraço,',
    },
    en: {
      subject: 'I’ve got your message',
      greeting: 'Hi {name},',
      body: 'Thank you for getting in touch! I’ve got your message and I’ll get back to you as soon as I can.',
      copy: 'Here’s a copy of what you sent:',
      signoff: 'Best wishes,',
    },
  },
  // Guards against the form being abused to send emails to strangers.
  maxRepliesPerDay: 30,
  sheetName: 'Contactos do site',
  // Spam filter: a person needs at least this long to fill the form (in seconds),
  // and a real message rarely carries more than this many links.
  minSeconds: 4,
  maxLinks: 2,
};

function doPost(e) {
  try {
    const d = read_(e);
    const fields = (d.fields || []).filter((f) => f && String(f[1]).trim() !== '');
    if (!fields.length) return reply_(false);

    // Spam: no email to João and no thank-you, but the robot is told all went well (so it doesn't try again)
    // and the message is kept in the sheet's "Spam" tab, just in case.
    const why = spam_(d, fields);
    if (why) {
      try {
        log_('Spam', `${why} — ${String(d.subject || '').slice(0, 200)}`, '', false, fields);
      } catch (err) {
        console.error(err);
      }
      return reply_(true);
    }

    const lang = d.lang === 'en' ? 'en' : 'pt';
    const email = isEmail_(d.email) ? String(d.email).trim() : '';
    const name = String(d.name || '').trim();
    const subject = String(d.subject || 'Contacto pelo site').slice(0, 200);

    // 1. To João.
    const toJoao = {
      to: CONFIG.to || Session.getEffectiveUser().getEmail(),
      subject: subject,
      body: asText_(fields),
      htmlBody: asHtml_(fields),
      name: 'joaoeiro.pt',
    };
    if (email) toJoao.replyTo = email;
    MailApp.sendEmail(toJoao);

    // 2. To the visitor.
    let replied = false;
    if (email && allowReply_(email)) {
      const r = CONFIG.reply[lang];
      const first = name.split(/\s+/)[0] || '';
      const greeting = first ? r.greeting.replace('{name}', first) : r.greeting.replace(' {name}', '');
      const text = [greeting, '', r.body, '', r.copy, '', asText_(fields), '', r.signoff, CONFIG.senderName, 'joaoeiro.pt'].join('\n');
      const html =
        `<p>${esc_(greeting)}</p><p>${esc_(r.body)}</p><p>${esc_(r.copy)}</p>` +
        `<blockquote style="margin:0 0 1em;padding-left:1em;border-left:3px solid #800000;color:#444">${asHtml_(fields)}</blockquote>` +
        `<p>${esc_(r.signoff)}<br>${esc_(CONFIG.senderName)}<br><a href="https://joaoeiro.pt">joaoeiro.pt</a></p>`;
      MailApp.sendEmail({ to: email, subject: r.subject, body: text, htmlBody: html, name: CONFIG.senderName });
      replied = true;
    }

    // 3. Copy in the sheet (never stops the form from working).
    try {
      log_(null, subject, email, replied, fields);
    } catch (err) {
      console.error(err);
    }
    return reply_(true);
  } catch (err) {
    console.error(err);
    return reply_(false);
  }
}

// The site sends JSON as plain text; a browser without JavaScript sends an ordinary form.
function read_(e) {
  const raw = e && e.postData && e.postData.contents;
  if (raw && raw.trim().charAt(0) === '{') return JSON.parse(raw);
  const p = (e && e.parameters) || {};
  const fields = Object.keys(p)
    .filter((k) => k.charAt(0) !== '_')
    .map((k) => [k, p[k].join(', ')]);
  return { fields: fields, trap: p._gotcha && p._gotcha.join(''), subject: p._subject && p._subject[0], plainForm: true };
}

// Why a send looks like spam (empty when it looks like a person). Robots usually post straight to this script
// instead of using the site's form, so they lack what the site's form always sends.
function spam_(d, fields) {
  if (d.plainForm) return 'não veio do formulário do site';
  if (d.trap) return 'campo escondido preenchido';
  if (['lessons', 'events', 'other'].indexOf(d.topic) < 0) return 'sem assunto';
  if (typeof d.elapsed !== 'number' || d.elapsed < CONFIG.minSeconds * 1000) return 'enviado depressa demais';
  const text = fields.map((f) => f[1]).join('\n');
  if ((text.match(/https?:\/\/|www\.|t\.me\/|wa\.me\//gi) || []).length > CONFIG.maxLinks) return 'demasiados links';
  return '';
}

function reply_(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}

function isEmail_(v) {
  return typeof v === 'string' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(v.trim()) && v.length <= 254;
}

// At most one thank-you per address a day, and a daily cap overall.
function allowReply_(email) {
  const cache = CacheService.getScriptCache();
  const key = 'r:' + email.toLowerCase();
  if (cache.get(key)) return false;
  const day = 'd:' + Utilities.formatDate(new Date(), 'Europe/Lisbon', 'yyyy-MM-dd');
  const count = Number(cache.get(day) || 0);
  if (count >= CONFIG.maxRepliesPerDay) return false;
  cache.put(key, '1', 21600); // 6 hours, the longest the cache keeps anything
  cache.put(day, String(count + 1), 21600);
  return true;
}

function asText_(fields) {
  return fields.map((f) => `${f[0]}\n${f[1]}`).join('\n\n');
}

function asHtml_(fields) {
  return fields
    .map((f) => `<p><strong>${esc_(f[0])}</strong><br>${esc_(f[1]).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function esc_(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

// Messages go to the first tab; spam to a tab called "Spam".
function log_(tab, subject, email, replied, fields) {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('sheetId');
  let ss;
  try {
    ss = id && SpreadsheetApp.openById(id);
  } catch (err) {
    ss = null;
  }
  if (!ss) {
    ss = SpreadsheetApp.create(CONFIG.sheetName);
    ss.getSheets()[0].appendRow(['Data', 'Assunto', 'Email', 'Resposta automática', 'Mensagem']);
    props.setProperty('sheetId', ss.getId());
  }
  let sheet = ss.getSheets()[0];
  if (tab) {
    sheet = ss.getSheetByName(tab);
    if (!sheet) {
      sheet = ss.insertSheet(tab);
      sheet.appendRow(['Data', 'Motivo', 'Mensagem']);
    }
    sheet.appendRow([new Date(), subject, asText_(fields)]);
    return;
  }
  sheet.appendRow([new Date(), subject, email, replied ? 'Sim' : 'Não', asText_(fields)]);
}

/** Run this once from the editor (select "test" and click Run) to authorise the script and see it work. */
function test() {
  const me = Session.getEffectiveUser().getEmail();
  doPost({
    postData: {
      contents: JSON.stringify({
        subject: 'Teste do formulário',
        lang: 'pt',
        name: 'João Teste',
        email: me,
        topic: 'other',
        elapsed: 10000,
        fields: [['Nome', 'João Teste'], ['A tua mensagem', 'Isto é um teste.']],
      }),
    },
  });
}
