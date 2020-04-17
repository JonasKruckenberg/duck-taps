export type Handler<T extends any[]> = ( ...args: T ) => any

export interface Tap {
  name:string,
  fn:Function
}

/**
* The hook class provides common functionality an values for all the hooks.
* You can extend it to add your own hooks.
*/
export abstract class Hook<T extends any[]> {
  /**
  * All the taps that are currently registered.
  */
  taps: Tap[] = []

  /**
  * Wether or not the hook is used by anything.
  * Returns true when anything has tapped into the hook.
  */
  get isUsed() {
    return this.taps.length > 0
  }
  /**
  * Register a named tap, other taps can use this name to register before or after this hook.
  */
  tap( name:string, handler:Handler<T> ):this
  /**
  * Register an anonymous tap. The name of the tap will be the name of the function.
  */
  tap( handler:Handler<T> ):this
  /**
  * Register a tap via a config object in the following format:
  * {
  *  name:string = 'tap name'
  *  fn:Function = Handler
  * }
  */
  tap( options:Tap ):this
  /**
  * Call this function, to tap into the hook.
  *
  */
  tap( arg:string | Tap | Handler<T>, handler?:Handler<T> ):this {
    let config:Partial<Tap> = {}
    if ( typeof arg === 'string' ) {
      config.name = arg
      config.fn = handler
    }
    if ( typeof arg === 'object' ) {
      config = arg
    }
    if ( typeof arg === 'function' ) {
      config.name = arg.name
      config.fn = arg
    }
    this._insert(config as Tap)
    return this
  }

  private _insert( tap:Tap ) {
    this.taps.unshift(tap)
  }
}
