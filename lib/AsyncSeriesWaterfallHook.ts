import { Hook } from './Hook'
import { merge } from './util'

/**
* The `AsyncSeriesWaterfallHook` will invoke all taps in sequence, but pass the retuns values from the last tap as the arguments to the next tap.
* You can use undefined as placeholder when you want to pass along the prevous value.
* When working with more than one argument, you have to return an array.
*/
export default class AsyncSeriesWaterfallHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook with the given arguments, will resolve with the retun values of the last tap.
  */
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      if ( !this.taps[i].phases.execute ) continue
      const res = await this.taps[i].phases.execute(...args, ctx )
      if ( Array.isArray(res) ) args = merge(args, res) as T
      else if ( res !== undefined ) args[0] = res
    }
    return args
  }
}
