import{ expect } from 'chai'
import AsyncSeriesHook from '../lib/AsyncSeriesHook'
import 'mocha'

describe('AsyncSeriesHook', () => {
  let hook:AsyncSeriesHook<[]>
  beforeEach(() => {
    hook = new AsyncSeriesHook<[]>()
  })
  describe('#promise()', () => {
    it('calls all taps in order', async () => {
      const calls:string[] = []
      hook.tap(async () => calls.push('A'))
      hook.tap(async () => calls.push('B'))
      hook.tap(async () => calls.push('C'))
      await hook.promise()
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
