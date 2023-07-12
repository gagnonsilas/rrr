const express = require('express');
const sqlite3 = require('sqlite3').verbose();
import { WebSocketServer } from 'ws';
import { createListeners } from './socket';
import { Application } from 'express';
import { loadSite } from './pages';

const app: Application = express();
const port = 3000;
const server = require('http').createServer(app, );
const wss = new WebSocketServer({ port:8080 });

createListeners(wss);

loadSite(app);

app.listen(port, () => {
  console.log(`RRR test server at http://localhost:${port}`);
});

