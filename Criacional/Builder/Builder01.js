// Definindo Parte de um Carro:
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    }
}

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Interior{
    constructor(cor){
        this.cor = cor;
    }
}

// Builder:
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    addMotor(tipo){
        this.motor = new Motor(tipo);
        return this;
    }

    addCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    addRodas(tamanho){
        this.rodas = new Rodas(tamanho);
        return this;
    }

    addInterior(cor){
        this.interior = new Interior(cor);
        return this;
    }

    construir(){
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}

// Construir Carro:
class Carro{
    constructor(motor, carroceria, rodas, interior){
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }
    
    mostrarDetalhes(){
        console.log(`CARRO:
            Motor: ${this.motor.tipo}
            Carroceria: ${this.carroceria.estilo}
            Rodas: ${this.rodas.tamanho}
            Interior: ${this.interior.cor}`);
    }
}

// USO DO MODELO BUILDER - Construindo um carro:
const builder = new CarroBuilder();

const carroEsportivo = builder
    .addMotor('V8')
    .addCarroceria('Esportivo')
    .addRodas(18)
    .addInterior('Preta')
    .construir();

const carroSedan = builder
    .addMotor('1.4 LT')
    .addCarroceria('Sedan')
    .addRodas(15)
    .addInterior('Bege')
    .construir();

const carroBYD = builder
    .addMotor('Eletrico 12V')
    .addCarroceria('Plastico da China')
    .addRodas(12)
    .addInterior('Plastico')
    .construir();

carroEsportivo.mostrarDetalhes();
carroSedan.mostrarDetalhes();
carroBYD.mostrarDetalhes();
