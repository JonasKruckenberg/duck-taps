import { Hook } from './Hook'

export default class SyncHook<T extends any[]> extends Hook<T> {
  call( ...args: T ) {
    const ctx:any = {}
    for ( let i = this.taps.length; i--;) {
      this.taps[i].fn(...args, ctx )
    }
  }
}
