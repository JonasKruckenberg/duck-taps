[duck-taps](README.md) › [Globals](globals.md)

# duck-taps

# duck-taps :duck:
> It's ducks, taps, ducks with taps. What more would you want?

![Unit Tests](https://github.com/JonasKruckenberg/duck-taps/workflows/Unit%20Tests/badge.svg)
![Release](https://github.com/JonasKruckenberg/duck-taps/workflows/Release/badge.svg)

This module provides a bunch of *Hooks* you can use to let other code *tap* into.

This should be a drop in replacement for [tapable](https://github.com/webpack/tapable) with a few differences:
1. You get first class type support, since the module is written in typescript.

2. It's **SMALL**. It's about 2kB and just 600Bytes when gzipped, and thats for the whole module, when you use tree-shaking you can get rid of all the Hooks you didn't use and further reduce the size!

3. *duck-taps* was born because I needed more Hooks than what was avaiable with *tapable*, so naturally this module comes with all the Hooks you'd ever need. I'm also open to pull requests if you have a type of Hook that I didn't think of.

4. It's extendable, meaning you can build you own Hook library on top of *duck-taps* if you want.

> :exclamation::alembic: THIS MODULE HAS NOT QUITE YET REACHED MATURITY, IM WORKING ON UPDATING THE README AND COMMENTS SOON
