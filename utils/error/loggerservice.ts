import * as winston from 'winston'
class LoggerService {
    private logger: any;
    constructor(){
        const logger = winston.createLogger({
            level:'info',
            format:winston.format.json(),
            defaultMeta:{service:'user-service'},
            transports:[
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
                new winston.transports.File({ filename: 'logs/combined.log' })
            ]
        })
        this.logger = logger
    }
    loggeradd(value:any){
        this.logger.add(value)
    }
}

export default LoggerService