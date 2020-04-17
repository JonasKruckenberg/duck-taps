import{ expect } from 'chai'
import AsyncParallelHook from '../lib/AsyncParallelHook'
import 'mocha'

describe('AsyncParallelHook', () => {
  let hook:AsyncParallelHook<[]>
  beforeEach(() => {
    hook = new AsyncParallelHook<[]>()
  })
  describe('#promise()', () => {
    it('calls all taps', async () => {
      const calls = new Set<string>()
      hook.tap(async () => calls.add('A'))
      hook.tap(async () => calls.add('B'))
      hook.tap(async () => calls.add('C'))
      await hook.promise()
      expect(calls.size).to.equal(3)
    })
    it('rejects when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.promise).to.throw
    })
  })
})
