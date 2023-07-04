const express = require('express');
const sqlite3 = require('sqlite3').verbose();
import { WebSocketServer } from 'ws';
import { createListeners } from './socket';
import { Application } from 'express';
import { loadSite } from './pages';

const app: Application = express();
const port = 3000;
const server = require('http').createServer(app);
const wss = new WebSocketServer(server);

const games = new sqlite3.Database('../database/games.db', (error: { message: any }) => {
  if(error) {
    console.log(error.message);
  }
});

createListeners(wss);

loadSite(app, games);

app.listen(port, () => {
  console.log(`RRR at http://localhost:${port}`);
});

