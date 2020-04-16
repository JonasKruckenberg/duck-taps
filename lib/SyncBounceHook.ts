import { Hook } from './Hook'
import { merge } from './util'
/**
* The `AsyncSeriesBounceHook` works similar to a Hook provided by *tapable*, with the big difference that this hook is not linear,
* but it *bounces* back from a tap in the chain, i.e. it executes the taps in the order they have been added until the end or one of the taps throws an error and then exeutes the stack backwards until it reaches the first plugin again.
* This is useful for for example a chain a taps that produce a response to a request for example.
* This Hook does not allow to bail, use the `AsyncSeriesBounceBailHook` for that.
*/
export default class SyncBounceHook<T extends any[]> extends Hook<T> {

  name:string

  constructor() {
    super()
    throw 'SyncBounceHook is currently not implemented'
  }
  // /**
  // * Invokes the hook with the given arguments and retuns the result of all the taps as an array. The returned Array has the same length as the number of arguments you pass in.
  // * When an error occured during the *out* phase it will throw and error.
  // */
  // call( ...args:any[] ) {
  //   let lvl = this.taps.length - 1
  //
  //   const ctx:any = { phase: 'in' }
  //
  //   for ( let i = lvl; i >= 0; i--) {
  //     if ( i === 0 ) ctx.phase = 'bounce'
  //     if ( this.taps[i].in ) {
  //       const res = this.taps[i].in(...args,ctx)
  //       if (res) merge(this.args,args,res)
  //     }
  //     lvl = i
  //   }
  //   ctx.phase = 'out'
  //   for ( let i = lvl + 1; i < this.taps.length; i++ ) {
  //     if ( !this.taps[i].out ) continue
  //     const res = this.taps[i].out(...args,ctx)
  //     if (res) merge(this.args,args,res)
  //   }
  //   return args
  // }
  //
  // /**
  // * Invokes the Hook with the given arguments and returns a promise that resolves when all taps are executed.
  // * When an error occures during the *out* phase the promise rejects.
  // */
  // async promise(...args:any[] ) {
  //   let lvl = this.taps.length - 1
  //
  //   const ctx:any = { phase: 'in' }
  //
  //   for ( let i = lvl; i >= 0; i--) {
  //     if ( i === 0 ) ctx.phase = 'bounce'
  //     if ( this.taps[i].in ) {
  //       const res = await this.taps[i].in(...args,ctx)
  //       if (res) merge(this.args,args,res)
  //     }
  //     lvl = i
  //   }
  //   ctx.phase = 'out'
  //   for ( let i = lvl + 1; i < this.taps.length; i++ ) {
  //     if ( !this.taps[i].out ) continue
  //     const res = await this.taps[i].out(...args,ctx)
  //     if (res) merge(this.args,args,res)
  //   }
  //   return args
  // }
}
