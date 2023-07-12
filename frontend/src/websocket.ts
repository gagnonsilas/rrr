let socket: WebSocket = new WebSocket("ws://localhost:8080");

socket.onopen = function(e) {
    console.log("[open] Connection established");
    socket.send("Test Message");
}