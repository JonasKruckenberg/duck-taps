import { assign } from './util'

export type Handler<T extends any[]> = ( ...args: T ) => any

export interface Tap {
  name:string,
  phases:Dictionary<Handler<any>>
}

interface Dictionary<T> {
    [Key: string]: T;
}

/**
* The hook class provides common functionality an values for all the hooks.
* You can extend it to add your own hooks.
*/
export abstract class Hook<T extends any[], P extends string = 'execute'> {
  /**
  * All the taps that are currently registered.
  */
  taps: Tap[] = []
  readonly phases = ['execute']

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
    let config:Partial<Tap> = {
      phases: {}
    }
    if ( typeof arg === 'string' ) {
      config.name = arg
      config.phases = assign(this.phases,handler)
    }
    if ( typeof arg === 'object' ) {
      config = arg
    }
    if ( typeof arg === 'function' ) {
      config.name = arg.name
      config.phases = assign(this.phases,arg)
    }
    this._insert(config as Tap)
    return this
  }
  /**
  * Register a named tap for the given phase, other taps can use this name to register before or after this hook.
  */
  phase( phase: P, name:string, handler:Handler<T> ):this
  /**
  * Register an anonymous tap for the given tap. The name of the tap will be the name of the function.
  */
  phase( phase: P, handler:Handler<T> ):this
  /**
  * Works just like #tap() but registers the the only for the given phase.
  */
  phase( phase: P, arg:string | Tap | Handler<T>, handler?:Handler<T> ):this {
    let config:Partial<Tap> = {
      phases: {}
    }
    if ( typeof arg === 'string' ) {
      config.name = arg
      config.phases[phase] = handler
    }
    if ( typeof arg === 'function' ) {
      config.name = arg.name
      config.phases[phase] = arg
    }
    this._insert(config as Tap)
    return this
  }
  /*
  * @todo Implement insertion order
  */
  private _insert( tap:Tap ) {
    this.taps.unshift(tap)
  }
}
