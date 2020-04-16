import{ expect } from 'chai'
import SyncHook from '../lib/SyncHook'
import 'mocha'

describe('SyncHook', () => {
  let hook:SyncHook<[]>
  beforeEach(() => {
    hook = new SyncHook<[]>()
  })
  describe('#call()', () => {
    it('calls all taps in order', () => {
      const calls:string[] = []
      hook.tap(() => calls.push('A'))
      hook.tap(() => calls.push('B'))
      hook.tap(() => calls.push('C'))
      hook.call()
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('throws when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.call).to.throw
    })
  })
})
