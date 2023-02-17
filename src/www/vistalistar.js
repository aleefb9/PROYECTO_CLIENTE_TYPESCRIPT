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
exports.VistaListar = void 0;
var vista_js_1 = require("./vista.js");
var VistaListar = /** @class */ (function (_super) {
    __extends(VistaListar, _super);
    function VistaListar(controlador, divListar) {
        var _this = _super.call(this, divListar) || this;
        _this.controlador = controlador;
        _this.modelo = _this.controlador.getModelo();
        _this.modelo = _this.controlador.getModelo();
        _this.modelo.registrar(_this.actualizar.bind(_this));
        _this.botonAlta = divListar.getElementsByTagName('button')[0];
        _this.botonAlta.onclick = _this.pulsarAlta.bind(_this);
        return _this;
    }
    /**
     * Método pulsar botón alta
    */
    VistaListar.prototype.pulsarAlta = function () {
        this.controlador.pulsarBotonAlta();
    };
    /**
     * Refresca y crea la tabla de ingresos de la consulta
     */
    VistaListar.prototype.actualizar = function () {
        // 	this.borrarIngresos()
        // 	let datos = this.modelo.getDatos()
        // 	for (let dato of datos){
        // 		let div = document.createElement('div')
        // 		divListar.appendChild(div)
        // 		let parrafoTipo = document.createElement('h2')
        // 		parrafoTipo.textContent = dato.tipo
        // 		parrafoTipo.style.margin = 0;
        // 		div.appendChild(parrafoTipo)
        // 		if (dato.file){
        // 			let img = document.createElement('img')
        // 			img.setAttribute('width', '100%')
        // 			img.setAttribute('height', 'auto')
        // 			img.setAttribute('src', dato.file)
        // 			div.appendChild(img)
        // 		}
        // 		else{
        // 			div.textContent=("NO SE INTRODUJO UNA IMAGEN")
        // 		}
        // 		let parrafoNombre = document.createElement('p')
        // 		parrafoNombre.textContent = 'Nombre: ' + dato.nombre
        // 		div.appendChild(parrafoNombre)
        // 		let parrafoDiametro = document.createElement('p')
        // 		parrafoDiametro.textContent = 'Diámetro: ' + dato.diametro
        // 		div.appendChild(parrafoDiametro)
        // 		let spanEliminar = document.createElement('img')
        // 		div.appendChild(spanEliminar)
        // 		spanEliminar.src = '../assets/papelera.png'
        // 		spanEliminar.style.width = '11%'
        // 		spanEliminar.onclick = this.eliminar.bind(this,dato.id)
        // 		let spanEditar = document.createElement('img')
        // 		div.appendChild(spanEditar)
        // 		spanEditar.src = '../assets/lapiz.png'
        // 		spanEditar.style.width = '11%'
        // 		spanEditar.textContent = '✏'
        // 	}
        // }
        // borrarIngresos(){
        // 	while (this.div.firstElementChild)
        // 	this.div.firstElementChild.remove()
        // }
        // eliminar(id){	
        // 	this.controlador.eliminarAstro(id)
        // 	this.actualizar();
    };
    return VistaListar;
}(vista_js_1.Vista));
exports.VistaListar = VistaListar;
