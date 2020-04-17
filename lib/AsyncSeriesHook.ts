import { Hook } from './Hook'

/**
* The *AsyncSeriesHook* works like the *SyncHook* but can also take promises. It will execute all taps in sequence.
*/
export default class AsyncSeriesHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook with the given parameters, resolves once all taps are done.
  */
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      if ( !this.taps[i].phases.execute ) continue
      await this.taps[i].phases.execute(...args, ctx )
    }
  }
}
