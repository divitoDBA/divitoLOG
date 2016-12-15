
var expect = require('chai').expect
var grabo = require('../lib/index.js')

describe('recLog', function () {
  describe('recLog()', function () {
    it('should display complete message', function (done) {
      var args = ['paquete', 'funcion', 'mensaje']
      grabo.recLog(args[0], args[1], args[2], function (results) {
        expect(results).to.contain('paquete')
        expect(results).to.contain('funcion')
        expect(results).to.contain('mensaje')
      })
      done()
    })

    it('should display module name, unknown package and complete message', function (done) {
      var args = ['paquete', null, 'mensaje']
      grabo.recLog(args[0], args[1], args[2], function (results) {
        expect(results).to.contain('paquete')
        expect(results).to.contain('unknown package')
        expect(results).to.contain('mensaje')
      })
      done()
    })

    it('should display unknown module, unknown package and complete message', function (done) {
      var args = [null, null, 'mensaje']
      grabo.recLog(args[0], args[1], args[2], function (results) {
        expect(results).to.contain('unknown module')
        expect(results).to.contain('unknown package')
        expect(results).to.contain('mensaje')
      })
      done()
    })
  })
})
