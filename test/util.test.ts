import { expect } from 'chai'
import { merge } from '../lib/util'
import 'mocha'

describe('merge()', () => {
  it('overwrites indexes in the first array', () => {
    const arr1 = [1,2,3,4]
    const arr2 = ['A','B','C','D']
    expect(merge(arr1,arr2)).to.deep.equal(arr2)
  })
  it('does nothing when value in arr2 is undefined or null', () => {
    const arr1 = [1,2,3,4]
    const arr2 = ['A','B']
    expect(merge(arr1,arr2)).to.deep.equal(['A','B',3,4])
  })
})
