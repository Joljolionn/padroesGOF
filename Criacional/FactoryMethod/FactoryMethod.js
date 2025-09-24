// Classe Base de Veiculo:
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }
    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Subclasses de Veiculo:
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Caminhao extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Fabrica Abstrata de Veiculo:
class FabricaDeVeiculo{
    criarVeiculo(modelo){
        throw new Error('O método deve ser implementado pela subclasses');
    }
}

// Fabrica Concreta de Carro:
class FabricaDeCarro extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

// Fabrica Concreta de Moto:
class FabricaDeMoto extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

// Fabrica Concreta de Caminhao:
class FabricaDeCaminhao extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Caminhao(modelo);
    }
}

// USO DO PADRAO DO PROJETO - FABRICA:
const fabricaDeCarro = new FabricaDeCarro();
const fabricaDeMoto = new FabricaDeMoto();
const fabricaDeCaminhao = new FabricaDeCaminhao();

const carro1 = fabricaDeCarro.criarVeiculo('Sedan');
const carro2 = fabricaDeCarro.criarVeiculo('Esportivo');
const moto1 = fabricaDeMoto.criarVeiculo('Yamanha-660');
const moto2 = fabricaDeMoto.criarVeiculo('Honda-CG160');
const caminhao1 = fabricaDeCaminhao.criarVeiculo('Scania');
const caminhao2 = fabricaDeCaminhao.criarVeiculo('VW-Cargo');

carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
moto1.mostrarDetalhes();
moto2.mostrarDetalhes();
caminhao1.mostrarDetalhes();
caminhao2.mostrarDetalhes();
