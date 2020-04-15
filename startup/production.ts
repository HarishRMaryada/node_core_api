
import helmet from 'helmet';
import compression from "compression";
import { Application } from 'express'

export default class Production {
    constructor(app: Application) {
        app.use(helmet());
        app.use(compression())
    }
}
