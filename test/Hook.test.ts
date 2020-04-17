import{ expect } from 'chai'
import { Hook } from '../lib/Hook'
import 'mocha'

class DummyHook<T extends any[]> extends Hook<T> {
  phases = ['execute']
}

class PhasedHook<T extends any[]> extends Hook<T,'execute' | 'special'> {
  phases = ['execute','special']
}

describe('Hook', () => {
  let hook:Hook<[string]>
  beforeEach(() => {
    hook = new DummyHook()
  })
  it('has property #taps', () => {
    expect(hook.taps).to.be.an('array')
  })
  describe('#isUsed', () => {
    it('is false when no taps are registered', () => {
      expect(hook.isUsed).to.equal(false)
    })
    it('is true when taps are registered', () => {
      hook.tap(() =>{})
      expect(hook.isUsed).to.equal(true)
    })
  })
  describe('#tap()', () => {
    it('works with a function', () => {
      const fn = () => {}
      hook.tap(fn)
      expect(hook.taps[0]).to.deep.equal({
        name:fn.name,
        phases: {
          execute: fn
        }
      })
    })
    it('works with an object', () => {
      const fn = () => {}
      hook.tap({
        name: 'test',
        phases: {
          execute: fn
        }
      })
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        phases: {
          execute: fn
        }
      })
    })
    it('works with a name and function', () => {
      const fn = () => {}
      hook.tap('test',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        phases: {
          execute: fn
        }
      })
    })
    it('inserts the taps in reverse order', () => {
      const fn = () => {}
      hook.tap('1',fn)
      hook.tap('2',fn)
      hook.tap('3',fn)
      expect(hook.taps[2]).to.deep.equal({
        name:'1',
        phases: {
          execute: fn
        }
      })
      expect(hook.taps[1]).to.deep.equal({
        name:'2',
        phases: {
          execute: fn
        }
      })
      expect(hook.taps[0]).to.deep.equal({
        name:'3',
        phases: {
          execute: fn
        }
      })
    })
  })
  describe('#phase()', () => {
    it('works with a function', () => {
      const fn = () => {}
      hook.phase('execute',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:fn.name,
        phases: {
          execute: fn
        }
      })
    })
    it('works with a name and function', () => {
      const fn = () => {}
      hook.phase('execute','test',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        phases: {
          execute: fn
        }
      })
    })
    it('works with special phase and a function', () => {
      const hook = new PhasedHook()
      const fn = () => {}
      hook.phase('special',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:fn.name,
        phases: {
          special: fn
        }
      })
    })
    it('works with sepcial phase, a name and function', () => {
      const hook = new PhasedHook()
      const fn = () => {}
      hook.phase('special','test',fn)
      expect(hook.taps[0]).to.deep.equal({
        name:'test',
        phases: {
          special: fn
        }
      })
    })
  })
})
