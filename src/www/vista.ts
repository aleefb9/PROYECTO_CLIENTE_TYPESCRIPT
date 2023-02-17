export class Vista {
	public div: HTMLElement;
	public ver: any;

	constructor(div: HTMLElement) {
		this.div = div
	}

	mostrar(ver: any) {
		if (ver)
			this.div.style.display = 'flex'	//Visualizar DIV
		else
			this.div.style.display = 'none'	//Ocultar DIV
	}

}
