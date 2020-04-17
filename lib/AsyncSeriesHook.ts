import { Hook } from './Hook'

export default class AsyncSeriesHook<T extends any[]> extends Hook<T> {
  async promise( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      await this.taps[i].fn(...args, ctx )
    }
  }
}