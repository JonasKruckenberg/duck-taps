[duck-taps](README.md)

# duck-taps

## Index

### Classes

* [AsyncLoopBailHook](classes/asyncloopbailhook.md)
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
* [SyncLoopBailHook](classes/syncloopbailhook.md)
* [SyncWaterfallHook](classes/syncwaterfallhook.md)

### Interfaces

* [Dictionary](interfaces/dictionary.md)
* [Tap](interfaces/tap.md)

### Type aliases

* [Handler](README.md#handler)

### Functions

* [assign](README.md#assign)
* [merge](README.md#merge)

## Type aliases

###  Handler

Ƭ **Handler**: *function*

*Defined in [lib/Hook.ts:3](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L3)*

#### Type declaration:

▸ (...`args`: T): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

## Functions

###  assign

▸ **assign**(`arr`: any[], `val`: any): *any*

*Defined in [lib/util.ts:4](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/util.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |
`val` | any |

**Returns:** *any*

___

###  merge

▸ **merge**(`arr1`: any[], `arr2`: any[]): *any[]*

*Defined in [lib/util.ts:1](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/util.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`arr1` | any[] |
`arr2` | any[] |

**Returns:** *any[]*
