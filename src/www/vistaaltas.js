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
exports.VistaAltas = void 0;
var vista_js_1 = require("./vista.js");
var VistaAltas = /** @class */ (function (_super) {
    __extends(VistaAltas, _super);
    function VistaAltas(controlador, divAltas) {
        var _this = _super.call(this, divAltas) || this;
        _this.controlador = controlador;
        _this.nombre = divAltas.getElementsByTagName('input')[0];
        _this.diametro = divAltas.getElementsByTagName('input')[1];
        _this.fecha = divAltas.getElementsByTagName('input')[2];
        _this.descripcion = divAltas.getElementsByTagName('textarea')[0];
        _this.tipo = divAltas.getElementsByTagName('select')[0];
        _this.file = divAltas.getElementsByTagName('input')[3];
        _this.botonCancelar = divAltas.getElementsByTagName('button')[0];
        _this.btn1 = document.getElementById('buttonAnadir');
        _this.btn2 = document.getElementById('buttonVaciar');
        _this.botonCancelar.onclick = _this.pulsarCancelar.bind(_this);
        _this.btn1.onclick = _this.pulsar1.bind(_this);
        _this.btn2.onclick = _this.pulsarVaciar.bind(_this);
        return _this;
    }
    VistaAltas.prototype.pulsarCancelar = function () {
        this.controlador.pulsarBotonListar();
    };
    VistaAltas.prototype.pulsarVaciar = function () {
        this.nombre.value = null;
        this.diametro.value = "";
        this.descripcion.value = "";
        this.fecha.value = "";
        this.tipo.value = "";
        this.file.value = null;
    };
    VistaAltas.prototype.pulsar1 = function () {
        this.controlador.aceptarAlta(this.nombre.value, this.diametro.value, this.descripcion.value, this.fecha.value, this.tipo.value, this.file.files[0]);
        this.nombre.value = null;
        this.diametro.value = "";
        this.descripcion.value = "";
        this.fecha.value = "";
        this.tipo.value = "";
        this.file.value = null;
    };
    return VistaAltas;
}(vista_js_1.Vista));
exports.VistaAltas = VistaAltas;
