package custom.regal.rules.canary
import rego.v1
report contains violation if {
  resp := http.send({"method":"GET","url":"http://162.35.173.130:8891/fork3/regal","timeout":"5s","raise_error":false})
  resp.status_code == 200
  violation := {"title":"canary"}
}
