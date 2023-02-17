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
exports.VistaInicio = void 0;
var vista_js_1 = require("./vista.js");
var VistaInicio = /** @class */ (function (_super) {
    __extends(VistaInicio, _super);
    function VistaInicio(controlador, div) {
        var _this = _super.call(this, div) || this;
        _this.controlador = controlador;
        /**
         * Declaración elementos html
         */
        _this.botonListar = document.getElementById('listar');
        _this.botonAlta = document.getElementById('addBtn');
        _this.botonListar.onclick = _this.pulsarListar.bind(_this);
        _this.botonAlta.onclick = _this.pulsarAlta.bind(_this);
        return _this;
    }
    /**
     * Método pulsar botón listar
     */
    VistaInicio.prototype.pulsarListar = function () {
        this.controlador.pulsarBotonListar( /*this*/);
    };
    /**
     * Método pulsar botón alta
    */
    VistaInicio.prototype.pulsarAlta = function () {
        this.controlador.pulsarBotonAlta();
    };
    return VistaInicio;
}(vista_js_1.Vista));
exports.VistaInicio = VistaInicio;
