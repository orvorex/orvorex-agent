export class Memory {

  private history: string[] = [];

  add(message: string) {
    this.history.push(message);
  }

  all() {
    return this.history;
  }

  clear() {
    this.history = [];
  }

}
