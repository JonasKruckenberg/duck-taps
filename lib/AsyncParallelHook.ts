import { Hook } from './Hook'

/**
* The `AsyncParallelHook` will execute all the taps in parallel and resolve once all of them are done executing.
*/
export default class AsyncParallelHook<T extends any[]> extends Hook<T> {
  /**
  * Call the hook with the given parameters. Resolves once all taps are done.
  * Will reject when any tap throws an error or rejects.
  */
  async promise( ...args: T ) {
    const ctx:any = {}
    const promises = this.taps.map(async tap => tap.fn(...args,ctx))
    await Promise.all(promises)
  }
}
