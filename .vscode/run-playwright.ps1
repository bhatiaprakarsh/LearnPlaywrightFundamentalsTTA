param(
  [Parameter(Mandatory = $true)]
  [string]$TestFile
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$resolvedTestFile = (Resolve-Path -LiteralPath $TestFile).Path
$fileName = [System.IO.Path]::GetFileName($resolvedTestFile)

Push-Location $projectRoot
try {
  if ($fileName -match '\.(spec|test)\.ts$') {
    $relativeTestFile = $resolvedTestFile.Substring($projectRoot.Length).TrimStart('\') -replace '\\', '/'
    & npx playwright test $relativeTestFile
  }
  else {
    & npx --yes tsx $resolvedTestFile
  }

  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
