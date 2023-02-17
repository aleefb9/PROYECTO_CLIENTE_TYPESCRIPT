"use strict";
exports.__esModule = true;
exports.Controlador = void 0;
var modelo_js_1 = require("./modelo.js");
var vistaheader_js_1 = require("./vistaheader.js");
var vistainicio_js_1 = require("./vistainicio.js");
var vistalistar_js_1 = require("./vistalistar.js");
var vistaaltas_js_1 = require("./vistaaltas.js");
var Controlador = /** @class */ (function () {
    function Controlador() {
        this.modelo = new modelo_js_1.Modelo();
        window.onload = this.iniciar.bind(this);
    }
    Controlador.prototype.iniciar = function () {
        // this.vista = new Vista(document.getElementById('divAltas'))
        this.header = document.getElementsByTagName('header')[0];
        this.divInicio = document.getElementById('divInicio');
        this.divListar = document.getElementById('divListar');
        this.divAltas = document.getElementById('divAltas');
        this.vistaHeader = new vistaheader_js_1.VistaHeader(this, this.header);
        this.vistaInicio = new vistainicio_js_1.VistaInicio(this, this.divInicio);
        this.vistaListar = new vistalistar_js_1.VistaListar(this, this.divListar);
        this.vistaAltas = new vistaaltas_js_1.VistaAltas(this, this.divAltas);
        this.vistaInicio.mostrar(true);
        this.vistaListar.mostrar(false);
        this.vistaAltas.mostrar(false);
    };
    /**
     * Función para ocultar vistas no visibles
     */
    Controlador.prototype.ocultarVistas = function () {
        this.vistaInicio.mostrar(false);
        this.vistaListar.mostrar(false);
        this.vistaAltas.mostrar(false);
    };
    /**
     * Función mostrar inicio
     */
    Controlador.prototype.pulsarBotonInicio = function () {
        this.ocultarVistas();
        this.vistaInicio.mostrar(true);
    };
    /**
     * Función mostrar Listar
     */
    Controlador.prototype.pulsarBotonListar = function () {
        this.ocultarVistas();
        this.vistaListar.mostrar(true);
    };
    /**
     * Función mostrar Alta
     */
    Controlador.prototype.pulsarBotonAlta = function () {
        this.ocultarVistas();
        this.vistaAltas.mostrar(true);
    };
    Controlador.prototype.aceptarAlta = function (nombre, diametro, descripcion, fecha, tipo, file) {
        this.modelo.insertar(nombre, diametro, descripcion, fecha, tipo, file);
    };
    Controlador.prototype.eliminarAstro = function (id) {
        this.modelo.borrar(id);
    };
    Controlador.prototype.getModelo = function () {
        return this.modelo;
    };
    return Controlador;
}());
exports.Controlador = Controlador;
var app = new Controlador();
