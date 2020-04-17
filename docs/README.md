[duck-taps - v1.1.0](README.md)

# duck-taps - v1.1.0

## Index

### Classes

* [AsyncParallelBailHook](classes/asyncparallelbailhook.md)
* [AsyncParallelHook](classes/asyncparallelhook.md)
* [AsyncSeriesBailHook](classes/asyncseriesbailhook.md)
* [AsyncSeriesBounceHook](classes/asyncseriesbouncehook.md)
* [AsyncSeriesHook](classes/asyncserieshook.md)
* [AsyncSeriesWaterfallHook](classes/asyncserieswaterfallhook.md)
* [Hook](classes/hook.md)
* [SyncBailHook](classes/syncbailhook.md)
* [SyncBounceHook](classes/syncbouncehook.md)
* [SyncHook](classes/synchook.md)
* [SyncWaterfallHook](classes/syncwaterfallhook.md)

### Interfaces

* [Tap](interfaces/tap.md)

### Type aliases

* [Handler](README.md#handler)

### Functions

* [merge](README.md#merge)

## Type aliases

###  Handler

Ƭ **Handler**: *function*

*Defined in [lib/Hook.ts:1](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L1)*

#### Type declaration:

▸ (...`args`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

## Functions

###  merge

▸ **merge**(`arr1`: any[], `arr2`: any[]): *any[]*

*Defined in [lib/util.ts:1](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/util.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`arr1` | any[] |
`arr2` | any[] |

**Returns:** *any[]*
