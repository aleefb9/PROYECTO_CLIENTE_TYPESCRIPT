"use strict";
exports.__esModule = true;
exports.Modelo = void 0;
var Modelo = /** @class */ (function () {
    function Modelo() {
        this.baseDatos;
        this.lista = [];
        this.callbacks = [];
        this.idb();
    }
    Modelo.prototype.registrar = function (callback) {
        this.callbacks.push(callback);
    };
    Modelo.prototype.avisar = function () {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback();
        }
    };
    /**
     * Devuelve los registros que haya en la base de datos y luego llama a los callbacks
     **/
    Modelo.prototype.obtenerRegistro = function () {
        var _this = this;
        var peticion = this.baseDatos.transaction('tablaAstros', 'readonly').objectStore('tablaAstros').getAll();
        peticion.onsuccess = function () {
            _this.lista = peticion.result;
            _this.avisar();
        };
        peticion.onerror = function () {
            console.error("No se ha podido conectar");
        };
    };
    /**
     * Inserta un registro en la base de datos
    */
    Modelo.prototype.insertar = function (nombre, diametro, descripcion, fecha, tipo, file) {
        var _this = this;
        if (file) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function () {
                var obj = {
                    nombre: nombre,
                    diametro: diametro,
                    descripcion: descripcion,
                    fecha: fecha,
                    tipo: tipo,
                    file: reader_1.result
                };
                var almacenar = _this.baseDatos.transaction('tablaAstros', 'readwrite').objectStore('tablaAstros').add(obj);
                almacenar.onsuccess = function () {
                    _this.obtenerRegistro();
                };
            };
        }
        else {
            var obj = {
                nombre: nombre,
                diametro: diametro,
                descripcion: descripcion,
                fecha: fecha,
                tipo: tipo,
                file: null
            };
            var almacenar = this.baseDatos.transaction('tablaAstros', 'readwrite').objectStore('tablaAstros').add(obj);
            almacenar.onsuccess = function () {
                _this.obtenerRegistro();
            };
        }
    };
    /**
     * Conecta a la base de datos
     */
    Modelo.prototype.idb = function () {
        var _this = this;
        var bd = window.indexedDB;
        if (window.indexedDB) {
            var respuesta = indexedDB.open("Astros", 1);
            respuesta.onsuccess = function (event) {
                _this.baseDatos = event.target.result;
                _this.obtenerRegistro();
            };
            respuesta.onerror = function () {
                console.log('ERROR');
            };
            respuesta.onupgradeneeded = function (evt) {
                _this.baseDatos = evt.target.result;
                _this.baseDatos.createObjectStore('tablaAstros', { keyPath: 'id', autoIncrement: true });
            };
        }
    };
    /* Borra los datos de la tabla astros */
    Modelo.prototype.borrar = function (id) {
        var _this = this;
        console.log(id);
        var request = this.baseDatos.transaction('tablaAstros', 'readwrite').objectStore("tablaAstros")["delete"](id);
        request.onsuccess = function () {
            _this.obtenerRegistro();
        };
    };
    /**
     * Retorna la lista de datos del modelo
     * @returns this.lista
     */
    Modelo.prototype.getDatos = function () {
        return this.lista;
    };
    return Modelo;
}());
exports.Modelo = Modelo;
