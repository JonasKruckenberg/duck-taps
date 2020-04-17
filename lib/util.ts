export function merge( arr1: any[], arr2: any[] ) {
  return arr1.map(( val, index ) => arr2[index] === undefined ? val : arr2[index] )
}
