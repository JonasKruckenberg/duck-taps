import { Hook } from './Hook'
/**
* The `SyncLoopBailHook` will invoke all the taps in  sequence looping forever until one of the taps returns anything.
*/
export default class AsyncLoopBailHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook, will resolve once one of the taps returns a value.
  */
  async promise( ...args: T ) {
    const ctx:any = {}
    do {
      for ( let i = this.taps.length; i--;) {
        if ( !this.taps[i].phases.execute ) continue
        const res = await this.taps[i].phases.execute(...args, ctx )
        if ( res !== undefined ) return res
      }
    } while ( true )
  }
}
