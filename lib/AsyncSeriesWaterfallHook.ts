import { Hook } from './Hook'
import { merge } from './util'

export default class AsyncSeriesWaterfallHook<T extends any[]> extends Hook<T> {
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      const res = await this.taps[i].fn(...args, ctx )
      if ( Array.isArray(res) ) args = merge(args, res) as T
      else if ( res !== undefined ) args[0] = res
    }
    return args
  }
}