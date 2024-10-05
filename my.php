<?php
// Set the content type to be streamable as text/event-stream
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// Function to send the data as SSE
function sendMsg($message) {
    echo "data: {$message}\n\n";
    ob_flush();
    flush();
}

// Keep sending messages every 3 seconds
$counter = 0;
    while (true) {
        sendMsg("Update: " . $counter++);
        sleep(3); // Delay for 3 seconds before the next update
    }
?>
