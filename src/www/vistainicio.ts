import { Vista } from './vista.js'
import {Controlador} from './app.js'

export class VistaInicio extends Vista {

	public controlador: Controlador;
	public botonListar: HTMLElement;
	public botonAlta: HTMLElement;
	public div: HTMLElement;

	constructor(controlador:Controlador, div: HTMLElement) {
		super(div)
		this.controlador = controlador

		/**
		 * Declaración elementos html
		 */
		this.botonListar = document.getElementById('listar')!
		this.botonAlta = document.getElementById('addBtn')!

		this.botonListar.onclick = this.pulsarListar.bind(this)
		this.botonAlta.onclick = this.pulsarAlta.bind(this)
	}

	/**
	 * Método pulsar botón listar
	 */
	pulsarListar() {
		this.controlador.pulsarBotonListar(/*this*/)
	}

	/**
	 * Método pulsar botón alta
	*/
	pulsarAlta() {
		this.controlador.pulsarBotonAlta()
	}
}