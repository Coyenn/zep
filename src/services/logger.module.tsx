export default class logger {
  info(message: string) {
    print(`[INFO]: ${message}`);
  }
  warn(message: string) {
    print(`[WARN]: ${message}`);
  }
  error(message: string) {
    print(`[ERROR]: ${message}`);
  }
}
