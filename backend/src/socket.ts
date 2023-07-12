import { WebSocketServer } from 'ws';

let sockets: Array<WebSocket> = [];

export function createListeners(wss: WebSocketServer) {

    wss.on('connection', connection);

    console.log("Loaded websocket");
}

function connection(webSocket: WebSocket) {
    sockets.push(webSocket);
    console.log(webSocket.url);

    webSocket.addEventListener('message', readPacket);
}

function readPacket(message: MessageEvent) {
    console.log("Client Sent:", message.data)
}