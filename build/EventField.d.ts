interface EventFieldListener<PayloadT> {
    (payload: PayloadT): void;
}
declare class EventFieldListenerGroup {
    private unbinds;
    /**
     * Register a listener in the group
     */
    on<PayloadT>(field: EventField<PayloadT>, listener: EventFieldListener<PayloadT>): void;
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
    /**
     * Helper method for creating a group of listeners
     */
    static group(): EventFieldListenerGroup;
}
