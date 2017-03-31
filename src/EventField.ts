
interface EventFieldListener<PayloadT> {
  (payload: PayloadT): void;
}

class EventFieldListenerGroup {

  private unbinds: Function[] = [];

  /**
   * Register a listener in the group
   */
  on<T>(field: EventField<T>, listener: EventFieldListener<T>): void {
    let unbind = field.on(listener);
    this.unbinds.push(unbind);
  }

  /**
   * Unregister all listeners in the group
   */
  unbind(): void {
    for (let unbind of this.unbinds) {
      unbind();
    }
    this.unbinds = [];
  }
  
}

class EventField<PayloadT> {

  private listeners: EventFieldListener<PayloadT>[] = [];

  /**
   * Register a listener
   */
  on(listener: EventFieldListener<PayloadT>): Function {
    this.listeners.push(listener);
    return () => this.un(listener);
  }

  /**
   * Unregister a listener
   */
  un(listener: EventFieldListener<PayloadT>): void {
    let index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * Invoke the registered listeners with the provided payload
   */
  emit(payload: PayloadT): void {
    for (let listener of this.listeners) {
      listener(payload);
    }
  }
}
