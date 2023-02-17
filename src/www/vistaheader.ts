import {Vista} from './vista.js'
import {Controlador} from './app.js'

export class VistaHeader extends Vista{
    
    public controlador: Controlador;
    public imagenInicio: HTMLElement;
    public header: HTMLElement;

    constructor(controlador: Controlador, header: HTMLElement){
        super(header)
        this.controlador = controlador

        this.imagenInicio = header.getElementsByTagName('img')[0]

        this.imagenInicio.onclick = this.pulsarInicio.bind(this)
    }

    /**
     * Método pulsar botón inicio
     */
    pulsarInicio(){
        this.controlador.pulsarBotonInicio()
    }
}