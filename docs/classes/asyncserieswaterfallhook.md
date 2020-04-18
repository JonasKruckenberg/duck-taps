[duck-taps](../README.md) › [AsyncSeriesWaterfallHook](asyncserieswaterfallhook.md)

# Class: AsyncSeriesWaterfallHook <**T, P**>

The `AsyncSeriesWaterfallHook` will invoke all taps in sequence, but pass the retuns values from the last tap as the arguments to the next tap.
You can use undefined as placeholder when you want to pass along the prevous value.
When working with more than one argument, you have to return an array.

## Type parameters

▪ **T**: *any[]*

▪ **P**: *string*

## Hierarchy

* [Hook](hook.md)‹T›

  ↳ **AsyncSeriesWaterfallHook**

## Index

### Properties

* [phases](asyncserieswaterfallhook.md#phases)
* [taps](asyncserieswaterfallhook.md#taps)

### Accessors

* [isUsed](asyncserieswaterfallhook.md#isused)

### Methods

* [phase](asyncserieswaterfallhook.md#phase)
* [promise](asyncserieswaterfallhook.md#promise)
* [tap](asyncserieswaterfallhook.md#tap)

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

▸ **promise**(...`args`: T): *Promise‹T›*

*Defined in [lib/AsyncSeriesWaterfallHook.ts:13](https://github.com/JonasKruckenberg/duck-taps/blob/57c0009/lib/AsyncSeriesWaterfallHook.ts#L13)*

Call the hook with the given arguments, will resolve with the retun values of the last tap.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *Promise‹T›*

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
