[duck-taps - v1.1.0](../README.md) › [SyncBounceHook](syncbouncehook.md)

# Class: SyncBounceHook <**T**>

The `AsyncSeriesBounceHook` works similar to a Hook provided by *tapable*, with the big difference that this hook is not linear,
but it *bounces* back from a tap in the chain, i.e. it executes the taps in the order they have been added until the end or one of the taps throws an error and then exeutes the stack backwards until it reaches the first plugin again.
This is useful for for example a chain a taps that produce a response to a request for example.
This Hook does not allow to bail, use the `AsyncSeriesBounceBailHook` for that.

## Type parameters

▪ **T**: *any[]*

## Hierarchy

* [Hook](hook.md)‹T›

  ↳ **SyncBounceHook**

## Index

### Constructors

* [constructor](syncbouncehook.md#constructor)

### Properties

* [name](syncbouncehook.md#name)
* [taps](syncbouncehook.md#taps)

### Accessors

* [isUsed](syncbouncehook.md#isused)

### Methods

* [tap](syncbouncehook.md#tap)

## Constructors

###  constructor

\+ **new SyncBounceHook**(): *[SyncBounceHook](syncbouncehook.md)*

*Defined in [lib/SyncBounceHook.ts:11](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/SyncBounceHook.ts#L11)*

**Returns:** *[SyncBounceHook](syncbouncehook.md)*

## Properties

###  name

• **name**: *string*

*Defined in [lib/SyncBounceHook.ts:11](https://github.com/JonasKruckenberg/duck-taps/blob/f992b34/lib/SyncBounceHook.ts#L11)*

___

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
