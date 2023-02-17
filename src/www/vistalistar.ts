import {Vista} from './vista.js'
import {Controlador} from './app.js'
import {Modelo} from './modelo.js'

export class VistaListar extends Vista{

	public controlador: Controlador;
	public modelo: Modelo;
	public botonAlta: HTMLElement;
	public divListar: any;

	constructor(controlador: Controlador, divListar: any){
		super(divListar)
		this.controlador = controlador
        this.modelo = this.controlador.getModelo()

		this.modelo = this.controlador.getModelo()
        this.modelo.registrar(this.actualizar.bind(this))

		this.botonAlta = divListar.getElementsByTagName('button')[0]
		this.botonAlta.onclick = this.pulsarAlta.bind(this)
	}

	/**
     * Método pulsar botón alta
	*/
	pulsarAlta(){
        this.controlador.pulsarBotonAlta()
    }

	/**
	 * Refresca y crea la tabla de ingresos de la consulta
	 */
	actualizar(){

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
	}
}
