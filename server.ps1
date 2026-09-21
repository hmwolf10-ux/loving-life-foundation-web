# Simple HTTP Server for the website
$port = if ($env:LLF_PORT) { [int]$env:LLF_PORT } else { 3000 }
$sourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server running at http://localhost:$port/" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = [Uri]::UnescapeDataString($request.Url.LocalPath)
    if ($localPath -eq "/") { $localPath = "/index.html" }

    $relativePath = $localPath.TrimStart("/").Replace("/", "\")
    $filePath = Join-Path $sourceDir $relativePath
    $resolvedRoot = [System.IO.Path]::GetFullPath($sourceDir)
    $resolvedPath = [System.IO.Path]::GetFullPath($filePath)

    if ($resolvedPath.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path $resolvedPath -PathType Leaf)) {
        $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
        $response.ContentLength64 = $bytes.Length

        # Set content type
        if ($resolvedPath -match "\.html$") { $response.ContentType = "text/html" }
        elseif ($resolvedPath -match "\.js$") { $response.ContentType = "application/javascript" }
        elseif ($resolvedPath -match "\.css$") { $response.ContentType = "text/css" }
        elseif ($resolvedPath -match "\.json$") { $response.ContentType = "application/json" }
        elseif ($resolvedPath -match "\.png$") { $response.ContentType = "image/png" }
        elseif ($resolvedPath -match "\.jpg$") { $response.ContentType = "image/jpeg" }
        elseif ($resolvedPath -match "\.gif$") { $response.ContentType = "image/gif" }
        elseif ($resolvedPath -match "\.svg$") { $response.ContentType = "image/svg+xml" }

        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $response.Close()
    }

    $response.Close()
}

$listener.Stop()
