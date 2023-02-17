"use strict";
exports.__esModule = true;
exports.Vista = void 0;
var Vista = /** @class */ (function () {
    function Vista(div) {
        this.div = div;
    }
    Vista.prototype.mostrar = function (ver) {
        if (ver)
            this.div.style.display = 'flex'; //Visualizar DIV
        else
            this.div.style.display = 'none'; //Ocultar DIV
    };
    return Vista;
}());
exports.Vista = Vista;
