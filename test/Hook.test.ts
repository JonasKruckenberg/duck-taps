import{ expect } from 'chai'
import { Hook } from '../lib/Hook'
import 'mocha'

class DummyHook<T extends any[]> extends Hook<T> {

}

describe('Hook', () => {
  let hook:Hook<[string]>
  beforeEach(() => {
    hook = new DummyHook()
  })
  it('has property #taps', () => {
    expect(hook.taps).to.be.an('array')
  })
  describe('#tap()', () => {
    it('works with a function', () => {
      const fn = () => {}
      hook.tap(fn)
      expect(hook.taps[0]).to.deep.equal({
        name:fn.name,
        fn
      })
    })
    it('works with an object', () => {
      const fn = () => {}
      hook.tap({
        name: 'test',
        fn
      })
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        fn
      })
    })
    it('works with a name and function', () => {
      const fn = () => {}
      hook.tap('test',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        fn
      })
    })
    it('inserts the taps in reverse order', () => {
      const fn = () => {}
      hook.tap('1',fn)
      hook.tap('2',fn)
      hook.tap('3',fn)
      expect(hook.taps[2]).to.deep.equal({
        name:'1',
        fn
      })
      expect(hook.taps[1]).to.deep.equal({
        name:'2',
        fn
      })
      expect(hook.taps[0]).to.deep.equal({
        name:'3',
        fn
      })
    })
  })
})
