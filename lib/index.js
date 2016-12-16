(function(exports){

  exports.recLog = function (pModule, pPack, pMessage, retorno) {
  if (pModule === undefined || pModule === null) {
    var vMod = 'unknown module'
  } else {
    vMod = pModule
  }
  if (pPack === undefined || pPack === null) {
    var vPack = 'unknown package'
  } else {
    vPack = pPack
  }
  if (pMessage === undefined || pMessage == null) {
    var vMsg = 'unknown message'
  } else {
    vMsg = pMessage
  }

  console.log(Date.now() + ' [' + vMod + ']{' + vPack + '} ' + vMsg)
}

})(typeof exports === 'undefined'? this.divitoLOG = {}: exports);

