[duck-taps](../README.md) › [AsyncSeriesHook](asyncserieshook.md)

# Class: AsyncSeriesHook <**T, P**>

The *AsyncSeriesHook* works like the *SyncHook* but can also take promises. It will execute all taps in sequence.

## Type parameters

▪ **T**: *any[]*

▪ **P**: *string*

## Hierarchy

* [Hook](hook.md)‹T›

  ↳ **AsyncSeriesHook**

## Index

### Properties

* [phases](asyncserieshook.md#phases)
* [taps](asyncserieshook.md#taps)

### Accessors

* [isUsed](asyncserieshook.md#isused)

### Methods

* [phase](asyncserieshook.md#phase)
* [promise](asyncserieshook.md#promise)
* [tap](asyncserieshook.md#tap)

## Properties

###  phases

• **phases**: *string[]* = ['execute']

*Inherited from [Hook](hook.md).[phases](hook.md#phases)*

*Defined in [lib/Hook.ts:24](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L24)*

___

###  taps

• **taps**: *[Tap](../interfaces/tap.md)[]* = []

*Inherited from [Hook](hook.md).[taps](hook.md#taps)*

*Defined in [lib/Hook.ts:23](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L23)*

All the taps that are currently registered.

## Accessors

###  isUsed

• **get isUsed**(): *boolean*

*Inherited from [Hook](hook.md).[isUsed](hook.md#isused)*

*Defined in [lib/Hook.ts:30](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L30)*

Wether or not the hook is used by anything.
Returns true when anything has tapped into the hook.

**Returns:** *boolean*

## Methods

###  phase

▸ **phase**(`phase`: P, `name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[phase](hook.md#phase)*

*Defined in [lib/Hook.ts:74](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L74)*

Register a named tap for the given phase, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | P |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **phase**(`phase`: P, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[phase](hook.md#phase)*

*Defined in [lib/Hook.ts:78](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L78)*

Register an anonymous tap for the given tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | P |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

___

###  promise

▸ **promise**(...`args`: T): *Promise‹void›*

*Defined in [lib/AsyncSeriesHook.ts:10](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/AsyncSeriesHook.ts#L10)*

Call the hook with the given parameters, resolves once all taps are done.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *Promise‹void›*

___

###  tap

▸ **tap**(`name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:36](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L36)*

Register a named tap, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:40](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L40)*

Register an anonymous tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`options`: [Tap](../interfaces/tap.md)): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:48](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/Hook.ts#L48)*

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
