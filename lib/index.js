
var recLog=function(p_module,p_pack,p_message)
{
  if (p_module === undefined)  { var v_mod = 'unknown module' ;   }
  if (p_pack   === undefined)  { var v_pack = 'unknown package' ; }
  if (p_message === undefined) { var v_msg = 'unknown message' ;  }

  console.log (Date.now() + '[' + v_mod + ']{' + v_pack + '} ' + v_msg ) ; 
}

exports.recLog=recLog ; 
