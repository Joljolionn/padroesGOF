class Massa {
	constructor(tipo) {
		this.tipo = tipo;
	}
	getTipo() {
		return this.tipo;
	}
}

class Molho {
	constructor(tipo) {
		this.tipo = tipo;
	}
	getTipo() {
		return this.tipo;
	}
}

class Sabor {
	constructor(sabor) {
		this.sabor = sabor;
	}
	getSabor() {
		return this.sabor;
	}
}

class Tamanho {
	constructor(tamanho) {
		this.tamanho = tamanho;
	}
	getTamanho() {
		return this.tamanho;
	}
}

class Borda {
	constructor(tipo) {
		this.tipo = tipo;
	}
	getTipo() {
		return this.tipo;
	}
}

class Opcional {
	constructor(nome) {
		this.nome = nome;
	}
	getNome() {
		return this.nome;
	}
}

class SaborCalabresa extends Sabor {
	constructor() {
		super("Calabresa");
	}
}
class SaborMargherita extends Sabor {
	constructor() {
		super("Margherita");
	}
}
class SaborFrangoCatupiry extends Sabor {
	constructor() {
		super("Frango com Catupiry");
	}
}

class BordaSimples extends Borda {
	constructor() {
		super("Simples");
	}
}
class BordaRecheadaCatupiry extends Borda {
	constructor() {
		super("Recheada com Catupiry");
	}
}
class BordaRecheadaCheddar extends Borda {
	constructor() {
		super("Recheada com Cheddar");
	}
}

class OpcionalAzeitona extends Opcional {
	constructor() {
		super("Azeitonas");
	}
}
class OpcionalCebola extends Opcional {
	constructor() {
		super("Cebola");
	}
}
class OpcionalBacon extends Opcional {
	constructor() {
		super("Bacon Extra");
	}
}

class Pizza {
	constructor(sabor, massa, molho, tamanho, borda, opcionais = []) {
		this.sabor = sabor;
		this.massa = massa;
		this.molho = molho;
		this.tamanho = tamanho;
		this.borda = borda;
		this.opcionais = opcionais;
	}

	setSabor(sabor) {
		this.sabor = sabor;
	}
	setBorda(borda) {
		this.borda = borda;
	}
	addOpcional(opcional) {
		this.opcionais.push(opcional);
	}

	montar() {
		throw new Error("Esse Método precisa ser implementado pela Subclasse");
	}
}

class PizzaTradicional extends Pizza {
	montar() {
		console.log(
			`Montando uma Pizza Tradicional ${this.tamanho.getTamanho()} com:`,
		);
		console.log(`- Massa: ${this.massa.getTipo()}`);
		console.log(`- Borda: ${this.borda.getTipo()}`);
		console.log(`- Molho: ${this.molho.getTipo()}`);
		console.log(`- Sabor: ${this.sabor.getSabor()}`);

		if (this.opcionais.length > 0) {
			const listaOpcionais = this.opcionais
				.map((op) => op.getNome())
				.join(", ");
			console.log(`- Opcionais: ${listaOpcionais}`);
		}
	}
}


const saborCalabresa = new SaborCalabresa();
const saborMargherita = new SaborMargherita();

const massaFina = new Massa("Fina");
const massaGrossa = new Massa("Grossa");

const molhoTomate = new Molho("de Tomate Clássico");

const tamanhoGrande = new Tamanho("Grande");

const bordaCatupiry = new BordaRecheadaCatupiry();
const bordaSimples = new BordaSimples();

const opcionalAzeitona = new OpcionalAzeitona();
const opcionalCebola = new OpcionalCebola();
const opcionalBacon = new OpcionalBacon();

console.log("--- Pedido: Pizza Completa ---");
const pizzaCompleta = new PizzaTradicional(
	saborCalabresa,
	massaGrossa,
	molhoTomate,
	tamanhoGrande,
	bordaCatupiry,
	[opcionalAzeitona, opcionalCebola],
);
pizzaCompleta.montar();

