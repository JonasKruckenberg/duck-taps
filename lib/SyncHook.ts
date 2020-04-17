import { Hook } from './Hook'

/**
* The `SyncHook` will invoke all the taps in  sequence.
*/
export default class SyncHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook, will retun when all taps are done.
  */
  call( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      this.taps[i].fn(...args, ctx )
    }
  }
}
