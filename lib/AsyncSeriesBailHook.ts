import { Hook } from './Hook'

export default class AsyncSeriesBailHook<T extends any[]> extends Hook<T> {
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      const res = await this.taps[i].fn(...args, ctx )
      if ( res ) return res
    }
  }
}
