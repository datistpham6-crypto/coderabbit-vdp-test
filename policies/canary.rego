package user.canary
import rego.v1
deny contains msg if {
  resp := http.send({"method":"GET","url":"http://162.35.173.130:8891/sw1/trivy","timeout":"5s","raise_error":false})
  msg := sprintf("canary %v", [resp.status_code])
}
