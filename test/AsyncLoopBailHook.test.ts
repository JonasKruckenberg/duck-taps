import{ expect } from 'chai'
import AsyncLoopBailHook from '../lib/AsyncLoopBailHook'
import 'mocha'

describe('AsyncLoopBailHook', () => {
  let hook:AsyncLoopBailHook<[]>
  beforeEach(() => {
    hook = new AsyncLoopBailHook<[]>()
  })
  describe('#promise()', () => {
    it('calls all taps in order', async () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      hook.tap(() => null)
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
    it('ignores tap with wrong phase', async () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      // @ts-ignore
      hook.phase('weird',() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      hook.tap(() => null)
      await hook.promise()
      expect(calls).to.deep.equal(['A','C'])
    })
    it('throws when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
