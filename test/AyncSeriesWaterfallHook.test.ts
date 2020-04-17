import{ expect } from 'chai'
import AsyncSeriesWaterfallHook from '../lib/AsyncSeriesWaterfallHook'
import 'mocha'

describe('AsyncSeriesWaterfallHook', () => {
  let hook:AsyncSeriesWaterfallHook<[string,string]>
  beforeEach(() => {
    hook = new AsyncSeriesWaterfallHook<[string,string]>()
  })
  describe('#call()', () => {
    it('calls all taps in order', async () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      await hook.promise('I','I')
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('passes the value through', async () => {
      const hook = new AsyncSeriesWaterfallHook<[string]>()
      hook.tap(async val => val + 'A')
      hook.tap(async val => val + 'B')
      hook.tap(async val => val + 'C')
      expect(await hook.promise('I')).to.deep.equal(['IABC'])
    })
    it('works with 2 parameters', async () => {
      const hook = new AsyncSeriesWaterfallHook<[string,string]>()
      hook.tap((val1, val2) => [val1 + 'A1',val2 + 'A2'])
      hook.tap((val1, val2) => [val1 + 'B1',val2 + 'B2'])
      hook.tap((val1, val2) => [val1 + 'C1',val2 + 'C2'])
      expect(await hook.promise('I1','I2')).to.deep.equal(['I1A1B1C1','I2A2B2C2'])
    })
    it('works with 3 parameters', async () => {
      const hook = new AsyncSeriesWaterfallHook<[string,string,string]>()
      hook.tap((val1, val2, val3) => [val1 + 'A1',val2 + 'A2',val3 + 'A3'])
      hook.tap((val1, val2, val3) => [val1 + 'B1',val2 + 'B2',val3 + 'B3'])
      hook.tap((val1, val2, val3) => [val1 + 'C1',val2 + 'C2',val3 + 'C3'])
      expect(await hook.promise('I1','I2','I3')).to.deep.equal(['I1A1B1C1','I2A2B2C2','I3A3B3C3'])
    })
    it('works with undefined as placeholder', async () => {
      const hook = new AsyncSeriesWaterfallHook<[string,string]>()
      hook.tap((val1, val2) => [val1 + 'A1',val2 + 'A2'])
      hook.tap((val1, val2) => [undefined,val2 + 'B2'])
      hook.tap((val1, val2) => [val1 + 'C1',undefined])
      expect(await hook.promise('I1','I2')).to.deep.equal(['I1A1C1','I2A2B2'])
    })
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
