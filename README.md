# duck-taps :duck:
> It's ducks, taps, ducks with taps. What more would you want?

![Unit Tests](https://github.com/JonasKruckenberg/duck-taps/workflows/Unit%20Tests/badge.svg)
![Release](https://github.com/JonasKruckenberg/duck-taps/workflows/Release/badge.svg)

This module provides a bunch of *Hooks* you can use to let other code *tap* into.

## Install

Install it with yarn:
```bash
yarn add duck-taps
```
Or with npm:
```bash
npm install duck-taps
```

## Usage

Basic usage is very straightforward:

```javascript
const { SyncHook } = require('duck-taps')

const hook = new SyncHook() // create a new Hook instance

hook.tap('Logger', arg => { // register a named tap (Logger) with the hook
  console.log(arg)
})

hook.call('Hello World') // call the hook with the argument 'Hello World'
```

And a basic typescript example with type declaration:
```typescript
import { SyncHook } from 'duck-taps'

const hook = new SyncHook<[string]>()

hook.tap('Logger', arg => { // arg is now type string

})

hook.call('Hello World') // you can only assign 1 argument now and it has to be a string
```

## Hooks

### `.tap()`

To register a tap ( plugin ) with the hook, you can use the `hook.tap()` method.
There are 3 ways you can do this:
  1. Anonymous Tap

    This is propably the most basic way to register a tap, you just provide the handler function to the `.tap()` method.
    ```typescript
      hook.tap(() => { // functionality here })
    ```
    This creates an anonymous tap, that has no name, so it cannot be addressed by name directly.

  2. Named Tap

    The second way is to provide a name and a handler function
    ```typescript
      hook.tap('Name of tap', () => { // functionality here })
    ```
    This creates a named tap. You can later use this name to insert taps before or after the tap.
    This way of creating a tap recreates the *tapable* behavior.
  3. Config object

    This is the most customizable way to create a tap. You pass in a config object detailing what function you want to put and where in the tap chain you want to put it.

    ```typescript
      hook.tap({
        name: 'Name of tap',
        fn: () => { // functionality here }
      })
    ```
### Hook phases

The biggest under-the hood change from tapable is the fact that duck-taps uses *hook phases*, each hooks can define custom phases that plugins can tap into.
The only hooks to take advantage of this currently are the bounce hooks, where the *in-order* part is one phase ( the `execution` phase ) and the *reverse-order* part is another ( the `post` phase ).

You can either provide a config object that specifies the phases or use the `hook.phase()` method. Normal registration still works though, you function will just get added to all phases.
All phases the hook has are specified in `hook.phases`.

There are some standard phases Hooks adopted:
- **execute** Is the standard phase, all hooks with just a single phase will just use this.
- **pre** Some hooks might use this phase to allow you to setup stuff, before the execution phase.
- **post** For cleaning up stuff after the execution phase or whatever you might have to do.
The Bounce hooks you this phase when going up the tap chain again.

### Synchronous vs. Asynchronous

The basic hooks are all synchronous. This is fine for small tap chains, but for larger ones or taps that are async functions or return promises this is not ideal, that's why there are also asynchronous hooks. Calling them returns a promise that resolves once the taps are done.

Synchronous hooks can be identified by the prefix `Sync` before the class name,
while asynchronous hooks can be identified by the `Async` prefix.

Async hooks also support parallel execution, the `AsyncParallelHook` and `AsyncSeriesBailHook` execute all taps in parallel, while all hooks with the `AsyncSeries` prefix execute all asnyc taps in sequence.

### Execution types

There are 4 types of synchonous hooks ( technically 4 ) that all execute the taps in sequence.
They only differ in the way they handle the return values:

  - **Hook**

  The `SyncHook` executes all taps in sequence. It does not return anything.
  The async counterpart is the `AsyncSeriesHook` it also accepts async functions and promises.

  - **Bail**

  Like the `SyncHook` the `SyncBailHook` executes all the taps in sequence, but if one of the taps returns anything the bail hook will stop executing the remaining ones and return the value the tap returned.
  The async counterparts to this hook are the `AsyncSeriesBailHook` and `AsyncParallelBailHook`

  - **Waterfall**

  A waterfall hook also calls each tapped function in a row. Unlike the basic hook, it passes a return value from each function to the next function.

  - **Bounce**

  A bounce hook works basically like a two way waterfall hook. When the hook gets called it first executes all taps in sequnce passing the return value from tap to tap.
  But once it reaches the end, it 'turns around' and starts executing the taps in backwards order.
  The last hook in the tap chain is the *bounce tap*. It gets only called once.
  ```typescript
  bounceHook.tap(console.log('A'))
  bounceHook.tap(console.log('B'))
  bounceHook.tap(console.log('C'))

  bounceHook.call() // will log like this:
  // A
  // B
  // C
  // B
  // A
  ```

  > This is useful for request handlers for example.

  - **Loop**
  > WARNING: :excalamtion::warning: The looping hook type is very dangerous, it can quickly lead to infite loops if you're not careful!

  A looping hook executes all the taps in sequence but loops once it reaches the end of the tap chain. This continues until one of the taps returns anything.

  Because of the danger of the loop hook more types than the Bail types have not been implemented yet.

## API
The complete Api documenation can be found here [API Docs](https://github.com/JonasKruckenberg/duck-taps/tree/master/docs)

## Contributing
