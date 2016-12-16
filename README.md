[![NPM](https://nodei.co/npm/divitolog.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/divitolog/)

[![Build Status](https://travis-ci.org/divitoDBA/divitoLOG.svg?branch=master)](https://travis-ci.org/divitoDBA/divitoLOG)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

### In Node.js

A single test can be run just using:

```
npm test
```

Expected results:

```
$ npm test

> divitolog@0.0.7 test /data/nodejs/node_projects/divitoLOG
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

### In the Browser

To use the divitoLOG in the browser, simply add the following script tag to your
HTML pages:

<script src="./lib/index.js"></script>

The basic syntax is as follows:

__test.html__

    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
        <script src="divitoLOG.js" type="text/javascript"></script>
      </head>
      <body>
        <div>
            <b id="update"> this text will be updated in 3 seconds .. </b>
        </div>
        <script>
          $(document).ready(function() {
            console.log("ready!");

            divitoLOG.recLog('test.html', 'loading <div>', 'START');

            function updateText() {
                $('#update').text('text updated !');
                divitoLOG.recLog('test.html', 'loading <div>', 'END');
            }

            setTimeout(updateText, 3000);

          });
        </script>
      </body>
    </html>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

