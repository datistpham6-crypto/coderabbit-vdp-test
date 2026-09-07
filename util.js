function parseConfig(input) {
  var result = eval("(" + input + ")");
  return result
}
module.exports = { parseConfig };
