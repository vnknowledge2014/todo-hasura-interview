import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import * as helmet from "helmet";
import * as http from "http";
import { todoItemAddedEvent, todoItemUpdatedEvent } from "./events";

const mount = async (app: Application): Promise<void> => {
    app.use(express.json());

    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());

    app.set("trust proxy", 1);

    const httpServer = http.createServer(app);
    httpServer.listen(process.env.PORT);
    console.log(`[app] : http://webhook:${process.env.PORT}`);

    todoItemAddedEvent(app);
    todoItemUpdatedEvent(app);
}

mount(express());

