//flyweight factoryclass fabrica
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }
    getFlyweight(id) {
    if (!this.flyweights[id]) {
        this.flyweights[id] = new ProdutoFlyweight(id);
    }
    return this.flyweights[id];
    }
}
 
//flyweight
class ProdutoFlyweight {
    constructor(id) {
        this.id = id;
    }
 
    exibirDetalhes(preco, nome) {
        console.log(`ID: ${this.id} |R$${preco.toFixed(2)} | PROD: ${nome}`);
    }
}
//cliente uso do padrao Flyweight
class Cliente {
    constructor() {
        this.fabricaFlyweight = new FlyweightFactory();
        this.pedidos = [];
    }
    adicionarPedido(id, preco, nome) {
        const flyweight = this.fabricaFlyweight.getFlyweight(id);
        this.pedidos.push({ flyweight, preco, nome });
    }
    exibirPedidos() {
        console.log("Pedidos do Cliente:");
        this.pedidos.forEach(item => {
            item.flyweight.exibirDetalhes(item.nome, item.preco);
        });
    }
}
 
 
//aplicacao geral da estrutura
let valor = 99.99;
const cliente = new Cliente();
cliente.adicionarPedido("001", "camisa",39.90);
cliente.adicionarPedido("002", "calça",79.90);
cliente.adicionarPedido("001", "camisa",39.90);
 
cliente.adicionarPedido("003", "tênis",129.90);
cliente.adicionarPedido("002", "bone", valor);
cliente.exibirPedidos();