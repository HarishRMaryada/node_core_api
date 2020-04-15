
import * as winston from 'winston';
import { Application } from "express";
// import LoggerService from '../utils/error/loggerservice'

class ProcessErrorHandler {
    private app: Application;
    constructor(app: Application) {
        this.app = app;
        this.unCaughtException()
        this.unhandledRejection()
        // this.production(app)
    }

    unCaughtException() {
        process.on('uncaughtException', (ex) => {
            winston.error(ex.message, ex)
        })
    }
    unhandledRejection() {
        process.on('unhandledRejection', (ex: any) => {
            winston.error(ex, ex)
        })
    }

    production(app: Application) {
        if (app.get('env') !== 'production') {
            //   add logger to store into file
        }
    }

}

export default ProcessErrorHandler