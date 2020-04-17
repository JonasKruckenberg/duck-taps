import { Hook } from './Hook'

/**
* The `SyncLoopBailHook` will invoke all the taps in  sequence looping forever until one of the taps returns anything.
*/
export default class SyncLoopBailHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook, will return once one of the taps returns a value.
  */
  call( ...args: T ) {
    const ctx:any = {}
    do {
      for ( let i = this.taps.length; i--;) {
        if ( !this.taps[i].phases.execute ) continue
        const res = this.taps[i].phases.execute(...args, ctx )
        if ( res !== undefined ) return res
      }
    } while ( true )
  }
}
