import{ expect } from 'chai'
import AsyncSeriesBailHook from '../lib/AsyncSeriesBailHook'
import 'mocha'

describe('AsyncSeriesBailHook', () => {
  let hook:AsyncSeriesBailHook<[]>
  beforeEach(() => {
    hook = new AsyncSeriesBailHook<[]>()
  })
  describe('#call()', () => {
    it('calls all taps in order', async () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      await hook.promise()
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('returns when a tap returns a value', async () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => 'B')
      hook.tap(() => { calls.push('C') })
      expect(await hook.promise()).to.equal('B')
      expect(calls).to.deep.equal(['A'])
    })
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
