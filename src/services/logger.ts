import { blue, bold, cyan, green, grey, red, white, yellow } from 'colors';
import dayjs from 'dayjs';

export class LoggerClient {
    private readonly date = () => grey(dayjs().format('DD/MM/YYYY HH:mm:ss'));
    private readonly identifier: string = 'System';
    constructor(identifier?: string) {
        if (identifier) this.identifier = identifier;
    }

    log(message: any | string, identifier?: string) {
        console.log(
            this.date(),
            blue('[LOG]   '),
            white(identifier || this.identifier),
            green(message)
        );
    }

    error(message: any | string, identifier?: string) {
        console.error(
            this.date(),
            red('[ERROR] '),
            white(identifier || this.identifier),
            bold(message)
        );
    }

    warn(message: any | string, identifier?: string) {
        console.warn(
            this.date(),
            yellow('[WARN]  '),
            white(identifier || this.identifier),
            cyan(message)
        );
    }
}

const Logger = new LoggerClient();

export default Logger;
