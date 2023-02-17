import {Modelo} from './modelo.js'
import {Vista} from './vista.js'
import {VistaHeader} from './vistaheader.js'
import {VistaInicio} from './vistainicio.js'
import {VistaListar} from './vistalistar.js'
import {VistaAltas} from './vistaaltas.js'

export class Controlador{

	public modelo: Modelo;
	public vista: Vista;
	public header: any;
	public divInicio: any;
	public divListar: any;
	public divAltas: any;
	public vistaHeader: VistaHeader;
	public vistaInicio: VistaInicio;
	public vistaListar: VistaListar;
	public vistaAltas: VistaAltas;

	constructor(){
		this.modelo = new Modelo()
		window.onload = this.iniciar.bind(this)
	}

	iniciar(){
		// this.vista = new Vista(document.getElementById('divAltas'))

		this.header = document.getElementsByTagName('header')[0]
		this.divInicio = document.getElementById('divInicio')
        this.divListar = document.getElementById('divListar')
		this.divAltas = document.getElementById('divAltas')

		this.vistaHeader = new VistaHeader(this, this.header)
		this.vistaInicio = new VistaInicio(this, this.divInicio)
        this.vistaListar= new VistaListar(this, this.divListar)
		this.vistaAltas = new VistaAltas(this, this.divAltas)

		this.vistaInicio.mostrar(true)
		this.vistaListar.mostrar(false)
		this.vistaAltas.mostrar(false)
	}
    /**
	 * Función para ocultar vistas no visibles
	 */
	ocultarVistas(){
		this.vistaInicio.mostrar(false)
		this.vistaListar.mostrar(false)
		this.vistaAltas.mostrar(false)
	}
	
	/**
	 * Función mostrar inicio
	 */
	pulsarBotonInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true)
	}

	/**
	 * Función mostrar Listar
	 */
	pulsarBotonListar(){
		this.ocultarVistas()
		this.vistaListar.mostrar(true)
	}
	
	/**
	 * Función mostrar Alta
	 */
	pulsarBotonAlta(){
		this.ocultarVistas()
		this.vistaAltas.mostrar(true)
	}

	aceptarAlta(nombre:String, diametro:String, descripcion:String, fecha:Date, tipo:String, file:File){
        this.modelo.insertar(nombre, diametro, descripcion, fecha, tipo, file)      
    }

	eliminarAstro(id:Number){
		this.modelo.borrar(id)
	}

	getModelo(){
		return this.modelo
	}
}
const app = new Controlador()
