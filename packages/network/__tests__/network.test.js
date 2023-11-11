'use strict';

const network = require('..');
const assert = require('assert').strict;

assert.strictEqual(network(), 'Hello from network');
console.info('network tests passed');
