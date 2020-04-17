import { Hook } from './Hook'

export default class AsyncParallelHook<T extends any[]> extends Hook<T> {
  async promise( ...args: T ) {
    const ctx:any = {}
    const promises = this.taps.map(async tap => tap.fn(...args,ctx))
    await Promise.all(promises)
  }
}
