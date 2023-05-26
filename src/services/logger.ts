import colors from 'chalk';
import dayjs from 'dayjs';

export class LoggerClient {
    private readonly date = () => colors.grey(dayjs().format('DD/MM/YYYY HH:mm:ss'));
    private readonly identifier: string = 'System';
    constructor(identifier?: string) {
        if (identifier) this.identifier = identifier;
    }

    log(message: any | string, identifier?: string) {
        console.log(
            this.date(),
            colors.blue('[LOG]   '),
            colors.white(identifier || this.identifier),
            colors.green(message)
        );
    }

    error(message: any | string, identifier?: string) {
        console.error(
            this.date(),
            colors.red('[ERROR] '),
            colors.white(identifier || this.identifier),
            colors.rgb(158, 26, 26)(message)
        );
    }

    warn(message: any | string, identifier?: string) {
        console.warn(
            this.date(),
            colors.yellowBright('[WARN]  '),
            colors.white(identifier || this.identifier),
            colors.yellow(message)
        );
    }
}

const Logger = new LoggerClient();

export default Logger;
