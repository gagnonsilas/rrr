import express = require('express')
import { Application } from 'express'

export function loadSite(app: Application) {
    loadStaticPages(app);

    loadDynamicPages(app)

    loadLogin(app);
}

function loadStaticPages(app: Application) {
    app.use('/', express.static('./../out/pages/'));

    console.log("Loaded Static Pages");
}



function loadLogin(app: Application) {
    app.post('/login', (req: any, res: any) => {
        console.log(req);
    });

    console.log("Loaded user login")
}

function loadDynamicPages(app: express.Application) {

    console.log("Loaded dynamic pages")
}
