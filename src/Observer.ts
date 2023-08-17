export default class Observer {
  public readonly subscribers: Record<
    string,
    (payload: unknown) => void | unknown
  >;
  constructor() {
    this.subscribers = {};
  }
  notifyAll(payload: unknown) {
    const self = this;
    for (const key in self.subscribers) {
      const fn = self.subscribers[key];
      fn(payload);
    }
  }
  notify(eventType: string, payload: unknown) {
    const fn = this.subscribers[eventType];
    fn(payload);
  }
  subscribe(eventType: string, item: () => unknown) {
    this.subscribers[eventType] = item;
  }
  unsubscribe(eventType: string) {
    delete this.subscribers[eventType];
  }
}
