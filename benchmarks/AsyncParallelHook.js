const { Suite } = require('benchmark')
const { AsyncParallelHook: DSyncHook } = require('../dist/index.js')
const { AsyncParallelHook: TSyncHook } = require('tapable')

const suite = new Suite()

const dhook = new DSyncHook()
const thook = new TSyncHook()

dhook.tap(() => {})
dhook.tap(() => {})
dhook.tap(() => {})

thook.tap('1',() => {})
thook.tap('2',() => {})
thook.tap('3',() => {})

suite.add('duck-taps synchook', async () => {
  await dhook.promise('Hello World')
})
suite.add('tapable synchook', async () => {
  await thook.promise('Hello World')
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true })
