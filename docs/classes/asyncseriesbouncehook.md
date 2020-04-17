[duck-taps - v1.1.0](../README.md) › [AsyncSeriesBounceHook](asyncseriesbouncehook.md)

# Class: AsyncSeriesBounceHook <**T**>

The `AsyncSeriesBounceHook` works similar to a Hook provided by *tapable*, with the big difference that this hook is not linear,
but it *bounces* back from a tap in the chain, i.e. it executes the taps in the order they have been added until the end or one of the taps throws an error and then exeutes the stack backwards until it reaches the first plugin again.
This is useful for for example a chain a taps that produce a response to a request for example.
This Hook does not allow to bail, use the `AsyncSeriesBounceBailHook` for that.

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* [Hook](hook.md)‹T, "execute" | "post"›

  ↳ **AsyncSeriesBounceHook**

## Index

### Properties

* [phases](asyncseriesbouncehook.md#phases)
* [taps](asyncseriesbouncehook.md#taps)

### Accessors

* [isUsed](asyncseriesbouncehook.md#isused)

### Methods

* [phase](asyncseriesbouncehook.md#phase)
* [promise](asyncseriesbouncehook.md#promise)
* [tap](asyncseriesbouncehook.md#tap)

## Properties

###  phases

• **phases**: *string[]* = ['execute','post']

*Overrides [Hook](hook.md).[phases](hook.md#phases)*

*Defined in [lib/AsyncSeriesBounceHook.ts:10](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/AsyncSeriesBounceHook.ts#L10)*

___

###  taps

• **taps**: *[Tap](../interfaces/tap.md)[]* = []

*Inherited from [Hook](hook.md).[taps](hook.md#taps)*

*Defined in [lib/Hook.ts:23](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L23)*

All the taps that are currently registered.

## Accessors

###  isUsed

• **get isUsed**(): *boolean*

*Inherited from [Hook](hook.md).[isUsed](hook.md#isused)*

*Defined in [lib/Hook.ts:30](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L30)*

Wether or not the hook is used by anything.
Returns true when anything has tapped into the hook.

**Returns:** *boolean*

## Methods

###  phase

▸ **phase**(`phase`: "execute" | "post", `name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[phase](hook.md#phase)*

*Defined in [lib/Hook.ts:74](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L74)*

Register a named tap for the given phase, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | "execute" &#124; "post" |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **phase**(`phase`: "execute" | "post", `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[phase](hook.md#phase)*

*Defined in [lib/Hook.ts:78](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L78)*

Register an anonymous tap for the given tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`phase` | "execute" &#124; "post" |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

___

###  promise

▸ **promise**(...`args`: T): *Promise‹T›*

*Defined in [lib/AsyncSeriesBounceHook.ts:12](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/AsyncSeriesBounceHook.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *Promise‹T›*

___

###  tap

▸ **tap**(`name`: string, `handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:36](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L36)*

Register a named tap, other taps can use this name to register before or after this hook.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`handler`: [Handler](../README.md#handler)‹T›): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

*Defined in [lib/Hook.ts:40](https://github.com/JonasKruckenberg/duck-taps/blob/bf28a82/lib/Hook.ts#L40)*

Register an anonymous tap. The name of the tap will be the name of the function.

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [Handler](../README.md#handler)‹T› |

**Returns:** *this*

▸ **tap**(`options`: [Tap](../interfaces/tap.md)): *this*

*Inherited from [Hook](hook.md).[tap](hook.md#tap)*

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
