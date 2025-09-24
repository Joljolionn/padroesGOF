const readline = require('readline')

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

class AbstractFactory {
    criarTerrestre(){}
    criarAereo(){}
}

class VeiculoFactory extends AbstractFactory {
    criarTerrestre(){
        return "Carro e Ônibus"
    }
    criarAereo(){
        return "Helicóptero e Avião"
    }
}

let veiculoFactory = new VeiculoFactory()

rl.question("Qual o tipo de veículo? ", (tipo) => {
    if(tipo.toString().toLowerCase() == "aereo") {
        veiculoFactory.criarAereo()
    } else if (tipo.toString().toLowerCase() == "terreste") {
        veiculoFactory.criarTerrestre()
    } else {
        console.log("tipo de veículo inválido")
    }
    rl.close()
})
