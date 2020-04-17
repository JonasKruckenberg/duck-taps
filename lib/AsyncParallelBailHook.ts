import { Hook } from './Hook'

export default class AsyncParallelBailHook<T extends any[]> extends Hook<T> {
  async promise( ...args: T ):Promise<T> {
    const ctx:any = {}
    try {
      const promises = this.taps.map( async tap => {
        const res = await tap.fn(...args, ctx )
        if ( res !== undefined ) throw res
      })
      await Promise.all(promises)
    } catch ( err ) {
      return err
    }
  }
}
