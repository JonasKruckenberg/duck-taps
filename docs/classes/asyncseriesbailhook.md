[duck-taps - v1.1.0](../README.md) › [AsyncSeriesBailHook](asyncseriesbailhook.md)

# Class: AsyncSeriesBailHook <**T**>

The *AsyncSeriesBailHook* will execute all taps in sequence until one of the taps retuns anything. Then it will stop the execution and resolve with that value.

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* [Hook](hook.md)‹T›

  ↳ **AsyncSeriesBailHook**

## Index

### Properties

* [taps](asyncseriesbailhook.md#taps)

### Accessors

* [isUsed](asyncseriesbailhook.md#isused)

### Methods

* [promise](asyncseriesbailhook.md#promise)
* [tap](asyncseriesbailhook.md#tap)

## Properties

###  taps

• **taps**: *[Tap](../interfaces/tap.md)[]* = []

*Inherited from [Hook](hook.md).[taps](hook.md#taps)*

*Defined in [lib/Hook.ts:16](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L16)*

All the taps that are currently registered.

## Accessors

###  isUsed

• **get isUsed**(): *boolean*

*Inherited from [Hook](hook.md).[isUsed](hook.md#isused)*

*Defined in [lib/Hook.ts:22](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L22)*

Wether or not the hook is used by anything.
Returns true when anything has tapped into the hook.

**Returns:** *boolean*

## Methods

###  promise

▸ **promise**(...`args`: T): *Promise‹any›*

*Defined in [lib/AsyncSeriesBailHook.ts:10](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/AsyncSeriesBailHook.ts#L10)*

Invoke the hook with the given parameters, resolves once all taps are done or one of the taps bailed.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *Promise‹any›*

___

###  tap

▸ **tap**(`name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:28](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L28)*

Register a named tap, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:32](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/Hook.ts#L32)*

Register an anonymous tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`options`: [Tap](../interfaces/tap.md)): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

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
