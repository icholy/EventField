interface EventFieldListener<PayloadT> {
    (payload: PayloadT): void;
}
declare class EventFieldListenerGroup<PayloadT> {
    private field;
    private unbinds;
    constructor(field: EventField<PayloadT>);
    /**
     * Register a listener in the group
     */
    on(listener: EventFieldListener<PayloadT>): void;
    /**
     * Unregister all listeners in the group
     */
    unbind(): void;
}
declare class EventField<PayloadT> {
    private listeners;
    /**
     * Register a listener
     */
    on(listener: EventFieldListener<PayloadT>): Function;
    /**
     * Unregister a listener
     */
    un(listener: EventFieldListener<PayloadT>): void;
    /**
     * Invoke the registered listeners with the provided payload
     */
    emit(payload: PayloadT): void;
}
