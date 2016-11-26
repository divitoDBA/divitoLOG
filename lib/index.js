
var recLog = function(p_module, p_pack, p_message, retorno) {
    if (p_module === undefined || p_module === null) {
        var v_mod = 'unknown module';
    } else {
        v_mod = p_module
    }
    if (p_pack === undefined || p_pack === null) {
        var v_pack = 'unknown package';
    } else {
        v_pack = p_pack
    }
    if (p_message === undefined || p_message == null) {
        var v_msg = 'unknown message';
    } else {
        v_msg = p_message
    }

    console.log(Date.now() + ' [' + v_mod + ']{' + v_pack + '} ' + v_msg);    
}

exports.recLog = recLog;

