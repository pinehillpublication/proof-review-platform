import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logsDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logFile = path.join(logsDir, 'app.log');

type LogLevel = 'info' | 'error' | 'warn' | 'debug';

class Logger {
  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    return JSON.stringify({ timestamp, level, message, data });
  }

  private write(level: LogLevel, message: string, data?: any): void {
    const formattedMessage = this.formatMessage(level, message, data);
    console.log(formattedMessage);
    fs.appendFileSync(logFile, formattedMessage + '\n');
  }

  info(message: string, data?: any): void { this.write('info', message, data); }
  error(message: string, data?: any): void { this.write('error', message, data); }
  warn(message: string, data?: any): void { this.write('warn', message, data); }
  debug(message: string, data?: any): void { if (process.env.NODE_ENV === 'development') this.write('debug', message, data); }
}

export default new Logger();
