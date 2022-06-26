import winston from 'winston'

    const logConfig = {
        level: 'info',
        transports: [new winston.transports.Console({ level: 'info' }),
                    new winston.transports.File({
                            filename: './logs/warnings.log',
                            level: 'warn',
                    }),
                    new winston.transports.File({
                            filename: './logs/errors.log',
                            level: 'error',
                    }),
        ],
    }
export const logger = winston.createLogger(logConfig);

