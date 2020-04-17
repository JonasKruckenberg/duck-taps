import { Hook } from './Hook'

/**
* The `AsyncParallelBailHook` executes all the taps in parallel, but resolves when one of the taps returns anything.
*/
export default class AsyncParallelBailHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook with the given parameters, all taps will be invokes in parallel.
  * When one tap returns anything the promise will be instantly resolved with the value.
  */
  async promise( ...args: T ):Promise<T> {
    const ctx:any = {}
    try {
      const promises = this.taps.map( async tap => {
        if ( !tap.phases.execute ) return
        const res = await tap.phases.execute(...args, ctx )
        if ( res !== undefined ) throw res
      })
      await Promise.all(promises)
    } catch ( err ) {
      return err
    }
  }
}
