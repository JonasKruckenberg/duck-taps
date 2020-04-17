import { Hook } from './Hook'
import { merge } from './util'
/**
* The `AsyncSeriesBounceHook` works similar to a Hook provided by *tapable*, with the big difference that this hook is not linear,
* but it *bounces* back from a tap in the chain, i.e. it executes the taps in the order they have been added until the end or one of the taps throws an error and then exeutes the stack backwards until it reaches the first plugin again.
* This is useful for for example a chain a taps that produce a response to a request for example.
* This Hook does not allow to bail, use the `AsyncSeriesBounceBailHook` for that.
*/
export default class SyncBounceHook<T extends any[]> extends Hook<T,'execute' | 'post'> {
  phases = ['execute','post']

  call( ...args: T ) {
    let i
    const ctx:any = {}
    for ( i = this.taps.length - 1; i >= 0; i--) {
      if ( !this.taps[i].phases.execute ) continue
      const res = this.taps[i].phases.execute(...args, ctx )
      if ( Array.isArray(res) ) args = merge(args, res) as T
      else if ( res !== undefined ) args[0] = res
    }
    i += 2
    for ( i; i < this.taps.length; i++ ) {
      if ( !this.taps[i].phases.post ) continue
      const res = this.taps[i].phases.post(...args, ctx )
      if ( Array.isArray(res) ) args = merge(args, res) as T
      else if ( res !== undefined ) args[0] = res
    }
    return args
  }
}
