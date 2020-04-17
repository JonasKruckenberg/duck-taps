[duck-taps - v1.1.0](../README.md) › [Hook](hook.md)

# Class: Hook <**T**>

The hook class provides common functionality an values for all the hooks.
You can extend it to add your own hooks.

## Type parameters

▪ **T**: *any[]*

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

## Index

### Properties

* [taps](hook.md#taps)

### Accessors

* [isUsed](hook.md#isused)

### Methods

* [_insert](hook.md#private-_insert)
* [tap](hook.md#tap)

## Properties

###  taps

• **taps**: *[Tap](../interfaces/tap.md)[]* = []

*Defined in [lib/Hook.ts:16](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L16)*

All the taps that are currently registered.

## Accessors

###  isUsed

• **get isUsed**(): *boolean*

*Defined in [lib/Hook.ts:22](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L22)*

Wether or not the hook is used by anything.
Returns true when anything has tapped into the hook.

**Returns:** *boolean*

## Methods

### `Private` _insert

▸ **_insert**(`tap`: [Tap](../interfaces/tap.md)): *void*

*Defined in [lib/Hook.ts:62](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`tap` | [Tap](../interfaces/tap.md) |

**Returns:** *void*

___

###  tap

▸ **tap**(`name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:28](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L28)*

Register a named tap, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`handler`: [Handler](../README.md#handler)‹T›): *this*

*Defined in [lib/Hook.ts:32](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L32)*

Register an anonymous tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`options`: [Tap](../interfaces/tap.md)): *this*

*Defined in [lib/Hook.ts:40](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L40)*

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
