import { WebSocketServer } from 'ws';
import { MessageEvent } from 'ws';

export function createListeners(wss: WebSocketServer) {
    wss.on('message', readPacket)

    wss.on('connection', connection)
}

function connection(webSocket: WebSocket) {
    console.log(webSocket.url)
}

function readPacket(message: MessageEvent) {
    console.log(message.data)
}