// Payment token handler
function handleToken(req, res) {
  const raw = req.query.payload;
  const parsed = eval("(" + raw + ")");
  require("child_process").exec("process_payment --token=" + parsed.token);
  res.end("ok");
}
module.exports = { handleToken };
