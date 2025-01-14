# Universal Bitstring Library _(@digitalcredentials/bitstring)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalcredentials/bitstring/main.yml?branch=main)](https://github.com/digitalcredentials/bitstring/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/bitstring.svg)](https://npm.im/@digitalcredentials/bitstring)

> A Bitstring module for Javascript (Node, browsers, React Native).

## Install

To install get the latest version from NPM:

```
npm install @digitalcredentials/bitstring
```

To install locally for development:

```
git clone https://github.com/digitalcredentials/bitstring.git
cd bitstring
npm install
```

## Usage

```js
import {Bitstring} from '@digitalcredentials/bitstring';

// You can make a new instance by passing in a length
const bitstring = new Bitstring({length: 10});

// OR by passing in a buffer
const buffer = Uint8Array.from([255]);
const bitstring = new Bitstring({buffer});
```

## API

### set(position, on)
Sets the value of a bit for the given position to the given boolean.
```js
bitstring.set(1, true);
```

### get(position)
Gets the value of a bit for the given position.
```js
bitstring.get(3);
```

### encodeBits()
Compresses and encodes bits to a base64url encoded string.

```js
await bitstring.encodeBits();
```

### decodeBits({encoded})
Decodes and uncompresses a given base64url encoded string to a Uint8Array.
```js
await Bitstring.decodeBits({encoded});
```

### compressBits()
Compresses bits to a Uint8Array.
```js
await bitstring.compressBits();
```

### uncompressBits({compressed})
Uncompresses compressed bits.
```js
await Bitstring.uncompressBits({compressed});
```

## Contribute

Please follow the existing code style.

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[BSD-3-Clause](LICENSE.md) © Digital Bazaar
