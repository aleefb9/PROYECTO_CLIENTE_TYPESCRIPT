"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VistaHeader = void 0;
var vista_js_1 = require("./vista.js");
var VistaHeader = /** @class */ (function (_super) {
    __extends(VistaHeader, _super);
    function VistaHeader(controlador, header) {
        var _this = _super.call(this, header) || this;
        _this.controlador = controlador;
        return _this;
        // this.imagenInicio = header.getElementsByTagName('img')[0]
        // this.imagenInicio.onclick = this.pulsarInicio.bind(this)
    }
    /**
     * Método pulsar botón inicio
     */
    VistaHeader.prototype.pulsarInicio = function () {
        this.controlador.pulsarBotonInicio();
    };
    return VistaHeader;
}(vista_js_1.Vista));
exports.VistaHeader = VistaHeader;
