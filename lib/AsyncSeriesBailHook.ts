import { Hook } from './Hook'

/**
* The *AsyncSeriesBailHook* will execute all taps in sequence until one of the taps retuns anything. Then it will stop the execution and resolve with that value.
*/
export default class AsyncSeriesBailHook<T extends any[]> extends Hook<T> {
  /**
  * Invoke the hook with the given parameters, resolves once all taps are done or one of the taps bailed.
  */
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      if ( !this.taps[i].phases.execute ) continue
      const res = await this.taps[i].phases.execute(...args, ctx )
      if ( res !== undefined ) return res
    }
  }
}
