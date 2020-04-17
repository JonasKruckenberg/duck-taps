[duck-taps - v1.1.0](../README.md) › [Hook](hook.md)

# Class: Hook <**T, P**>

The hook class provides common functionality an values for all the hooks.
You can extend it to add your own hooks.

## Type parameters

▪ **T**: *any[]*

▪ **P**: *string*

## Hierarchy

* **Hook**

  ↳ [SyncHook](synchook.md)

  ↳ [SyncBailHook](syncbailhook.md)

  ↳ [SyncWaterfallHook](syncwaterfallhook.md)

  ↳ [SyncBounceHook](syncbouncehook.md)

  ↳ [AsyncParallelHook](asyncparallelhook.md)

  ↳ [AsyncParallelBailHook](asyncparallelbailhook.md)

  ↳ [AsyncSeriesHook](asyncserieshook.md)

  ↳ [AsyncSeriesBailHook](asyncseriesbailhook.md)

  ↳ [AsyncSeriesWaterfallHook](asyncserieswaterfallhook.md)

  ↳ [AsyncSeriesBounceHook](asyncseriesbouncehook.md)

  ↳ [AsyncLoopBailHook](asyncloopbailhook.md)

  ↳ [SyncLoopBailHook](syncloopbailhook.md)

## Index

### Properties

* [phases](hook.md#phases)
* [taps](hook.md#taps)

### Accessors

* [isUsed](hook.md#isused)

### Methods

* [_insert](hook.md#private-_insert)
* [phase](hook.md#phase)
* [tap](hook.md#tap)

## Properties

###  phases

• **phases**: *string[]* = ['execute']

*Defined in [lib/Hook.ts:24](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L24)*

___

###  taps

• **taps**: *[Tap](../interfaces/tap.md)[]* = []

*Defined in [lib/Hook.ts:23](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L23)*

All the taps that are currently registered.

## Accessors

###  isUsed

• **get isUsed**(): *boolean*

*Defined in [lib/Hook.ts:30](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L30)*

Wether or not the hook is used by anything.
Returns true when anything has tapped into the hook.

**Returns:** *boolean*

## Methods

### `Private` _insert

▸ **_insert**(`tap`: [Tap](../interfaces/tap.md)): *void*

*Defined in [lib/Hook.ts:98](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`tap` | [Tap](../interfaces/tap.md) |

**Returns:** *void*

___

###  phase

▸ **phase**(`phase`: P, `name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:74](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L74)*

Register a named tap for the given phase, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | P |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **phase**(`phase`: P, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:78](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L78)*

Register an anonymous tap for the given tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | P |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

___

###  tap

▸ **tap**(`name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:36](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L36)*

Register a named tap, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:40](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L40)*

Register an anonymous tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`options`: [Tap](../interfaces/tap.md)): *this*

*Defined in [lib/Hook.ts:48](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L48)*

Register a tap via a config object in the following format:
{
 name:string = 'tap name'
 fn:Function = Handler
}

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Tap](../interfaces/tap.md) |

**Returns:** *this*
