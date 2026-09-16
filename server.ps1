# Simple HTTP Server for the website
$port = 3000
$sourceDir = "C:\Users\Hayden\My Files\Github\loving-life-foundation-web\src"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server running at http://localhost:$port/" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath
    if ($localPath -eq "/") { $localPath = "/index.html" }

    $filePath = Join-Path $sourceDir ($localPath.TrimStart("/").Replace("/", "\"))

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length

        # Set content type
        if ($filePath -match "\.html$") { $response.ContentType = "text/html" }
        elseif ($filePath -match "\.js$") { $response.ContentType = "application/javascript" }
        elseif ($filePath -match "\.css$") { $response.ContentType = "text/css" }
        elseif ($filePath -match "\.json$") { $response.ContentType = "application/json" }
        elseif ($filePath -match "\.png$") { $response.ContentType = "image/png" }
        elseif ($filePath -match "\.jpg$") { $response.ContentType = "image/jpeg" }
        elseif ($filePath -match "\.gif$") { $response.ContentType = "image/gif" }
        elseif ($filePath -match "\.svg$") { $response.ContentType = "image/svg+xml" }

        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $response.Close()
    }

    $response.Close()
}

$listener.Stop()
