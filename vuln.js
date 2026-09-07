// Payment token handler
function handleToken(req, res) {
  const raw = req.query.payload;
  // Obvious, deliberate vulnerability for the integrity test:
  const parsed = eval("(" + raw + ")");
  const cmd = "process_payment --token=" + parsed.token;
  require("child_process").exec(cmd);
  res.end("ok");
}
module.exports = { handleToken };
