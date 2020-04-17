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
    it('works with 2 parameters', () => {
      const hook = new SyncWaterfallHook<[string,string]>()
      hook.tap((val1, val2) => [val1 + 'A1',val2 + 'A2'])
      hook.tap((val1, val2) => [val1 + 'B1',val2 + 'B2'])
      hook.tap((val1, val2) => [val1 + 'C1',val2 + 'C2'])
      expect(hook.call('I1','I2')).to.deep.equal(['I1A1B1C1','I2A2B2C2'])
    })
    it('works with 3 parameters', () => {
      const hook = new SyncWaterfallHook<[string,string,string]>()
      hook.tap((val1, val2, val3) => [val1 + 'A1',val2 + 'A2',val3 + 'A3'])
      hook.tap((val1, val2, val3) => [val1 + 'B1',val2 + 'B2',val3 + 'B3'])
      hook.tap((val1, val2, val3) => [val1 + 'C1',val2 + 'C2',val3 + 'C3'])
      expect(hook.call('I1','I2','I3')).to.deep.equal(['I1A1B1C1','I2A2B2C2','I3A3B3C3'])
    })
    it('works with undefined as placeholder', () => {
      const hook = new SyncWaterfallHook<[string,string]>()
      hook.tap((val1, val2) => [val1 + 'A1',val2 + 'A2'])
      hook.tap((val1, val2) => [undefined,val2 + 'B2'])
      hook.tap((val1, val2) => [val1 + 'C1',undefined])
      expect(hook.call('I1','I2')).to.deep.equal(['I1A1C1','I2A2B2'])
    })
    it('ignores taps with wrong phase', () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      // @ts-ignore
      hook.phase('weird',() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      hook.call('I','I')
      expect(calls).to.deep.equal(['A','C'])
    })
    it('throws when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.call).to.throw
    })
  })
})
