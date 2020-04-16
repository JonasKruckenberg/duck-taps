import{ expect } from 'chai'
import SyncWaterfallHook from '../lib/SyncWaterfallHook'
import 'mocha'

describe('SyncWaterfallHook', () => {
  let hook:SyncWaterfallHook<[string,string]>
  beforeEach(() => {
    hook = new SyncWaterfallHook<[string,string]>()
  })
  describe('#call()', () => {
    it('calls all taps in order', () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      hook.call('I','I')
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('passes the value through', () => {
      const hook = new SyncWaterfallHook<[string]>()
      hook.tap(val => val + 'A')
      hook.tap(val => val + 'B')
      hook.tap(val => val + 'C')
      expect(hook.call('I')).to.deep.equal(['IABC'])
    })
    it('throws when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.call).to.throw
    })
  })
})
