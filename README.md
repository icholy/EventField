# EventField:

> Type Safe Event Fields

**Usage:**

``` ts

class MyThing {

  public FooEvent = new EventField<string>();

  constructor() {
    setInterval(_ => this.FooEvent.trigger("foo"), 1000);
  }
}

let thing = new MyThing();

thing.FooEvent.addListener((payload) => {
  console.log(payload);
});

```

