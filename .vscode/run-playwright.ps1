param(
  [Parameter(Mandatory = $true)]
  [string]$TestFile
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$resolvedTestFile = (Resolve-Path -LiteralPath $TestFile).Path

Push-Location $projectRoot
try {
  $relativeTestFile = $resolvedTestFile.Substring($projectRoot.Length).TrimStart('\') -replace '\\', '/'
  & npx playwright test $relativeTestFile
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
