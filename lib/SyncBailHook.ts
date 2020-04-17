import { Hook } from './Hook'

export default class SyncBailHook<T extends any[]> extends Hook<T> {
  call( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      const res = this.taps[i].fn(...args, ctx )
      if ( res !== undefined ) return res
    }
  }
}
