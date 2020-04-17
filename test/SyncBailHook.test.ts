import{ expect } from 'chai'
import SyncBailHook from '../lib/SyncBailHook'
import 'mocha'

describe('SyncBailHook', () => {
  let hook:SyncBailHook<[]>
  beforeEach(() => {
    hook = new SyncBailHook<[]>()
  })
  describe('#call()', () => {
    it('calls all taps in order', () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => { calls.push('B') })
      hook.tap(() => { calls.push('C') })
      hook.call()
      expect(calls).to.deep.equal(['A','B','C'])
    })
    it('returns when a tap returns a value', () => {
      const calls:string[] = []
      hook.tap(() => { calls.push('A') })
      hook.tap(() => 'B')
      hook.tap(() => { calls.push('C') })
      expect(hook.call()).to.equal('B')
      expect(calls).to.deep.equal(['A'])
    })
    it('throws when tap throws', () => {
      hook.tap(() => { throw new Error('dummy') })
      expect(hook.call).to.throw
    })
  })
})