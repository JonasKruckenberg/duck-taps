import { Hook } from './Hook'

/**
* The `SyncBailHook` will invoke all taps in sequence, but stop once one of the taps retuns anything other tahn undefined.
* It will return that value.
*/
export default class SyncBailHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook with the given arguments. Will return once all the hooks are done.
  */
  call( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      if ( !this.taps[i].phases.execute ) continue
      const res = this.taps[i].phases.execute(...args, ctx )
      if ( res !== undefined ) return res
    }
  }
}
