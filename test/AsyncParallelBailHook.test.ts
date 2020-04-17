import{ expect } from 'chai'
import AsyncParallelBailHook from '../lib/AsyncParallelBailHook'
import 'mocha'

describe('AsyncParallelBailHook', () => {
  let hook:AsyncParallelBailHook<[]>
  beforeEach(() => {
    hook = new AsyncParallelBailHook<[]>()
  })
  describe('#promise()', () => {
    it('calls all taps', async () => {
      const calls = new Set<string>()
      hook.tap(async () => { calls.add('A') })
      hook.tap(async () => { calls.add('B') })
      hook.tap(async () => { calls.add('C') })
      await hook.promise()
      expect(calls.size).to.equal(3)
    })
    it('returnes the value of the first tap that returns', async () => {
      hook.tap(async () => {})
      hook.tap(async () => 'B')
      hook.tap(async () => {})
      expect(await hook.promise()).to.equal('B')
    })
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
