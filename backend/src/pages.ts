import express = require('express')
import { Application } from 'express'
import { sqlite3 } from 'sqlite3';

export function loadSite(app: Application, games: sqlite3) {
    loadStaticPages(app);

    loadDynamicPages(app, games)

    loadLogin(app);
}

function loadStaticPages(app: Application) {
    app.use('/', express.static('./../frontend/'));

    console.log("Loaded Static Pages");
}



function loadLogin(app: Application) {
    app.post('/login', (req: any, res: any) => {
        console.log(req);
    });

    console.log("Loaded user login")
}

function loadDynamicPages(app: express.Application, games: sqlite3) {

    console.log("Loaded dynamic pages")
}
