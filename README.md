# EventField:

> Type Safe Event Fields

**Usage:**

``` ts

class MyThing {

  public FooEvent = new EventField<string>();

  constructor() {
    setInterval(_ => this.FooEvent.emit("foo"), 1000);
  }
}

let thing = new MyThing();

thing.FooEvent.on((payload) => {
  console.log(payload);
});

```

