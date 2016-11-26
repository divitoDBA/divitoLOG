[![NPM](https://nodei.co/npm/divitolog.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/divitolog/)

[![Build Status](https://travis-ci.org/divitoDBA/divitoLOG.svg?branch=master)](https://travis-ci.org/divitoDBA/divitoLOG)

# divitoLOG

AdHoc Logging Package

### Prerequisites

For testing:

```
- Mocha
- Chai
```

### Installing

Install with npm:
```
npm install divitolog
```
## Running the tests

A single test can be run just using:

```
npm test
```

Expected results:

```
$ npm test

> divitolog@0.0.5 test /data/nodejs/node_projects/divitoLOG
> mocha test/test.js



  recLog
    recLog()
1480183881435 [paquete]{funcion} mensaje
      ✓ should display complete message
1480183881445 [paquete]{unknown package} mensaje
      ✓ should display module name, unknown package and complete message
1480183881447 [unknown module]{unknown package} mensaje
      ✓ should display unknown module, unknown package and complete message


  3 passing (37ms)

$
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

