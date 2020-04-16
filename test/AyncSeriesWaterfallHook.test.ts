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
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
