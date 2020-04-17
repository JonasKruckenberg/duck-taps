export type Handler<T extends any[]> = ( ...args: T ) => any

export interface Tap {
  name:string,
  fn:Function
}

export abstract class Hook<T extends any[]> {

  taps: Tap[] = []

  get isUsed() {
    return this.taps.length > 0
  }

  tap( name:string, handler:Handler<T> ):this
  tap( handler:Handler<T> ):this
  tap( options:Tap ):this
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
