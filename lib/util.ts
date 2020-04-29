/**
* This function merges two arrays overwriting elements in the first array with corresponding values from the second array nuless the value is undefined.
*/
export function merge( arr1: any[], arr2: any[] ) {
  return arr1.map(( val, index ) => arr2[index] === undefined ? val : arr2[index] )
}
/**
* This function creates an object with a given set of keys and set every key equal to a value.
*/
export function assign( arr: any[], val: any) {
  return arr.reduce(( acc, current ) => {
    acc[current] = val
    return acc
  },{})
}
