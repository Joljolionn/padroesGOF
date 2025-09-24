// LINK DO COD: https://abre.ai.fatec-tpii
//***************************************************

// 1 - Interface do Cliente
class AplicacaoCliente{
    request() {}
}

// 1.1 - Cliente
class Cliente{
    constructor(target){
        this.target = target;
    }

    criaRequest(){
        console.log("Cliente - Fazendo uma Requisição");
        this.target.resquest();
    }
}

// 2 - Serviço Existente
class Adaptee{
    especificaRequest(){
        console.log("Requisição especifica do Adaptee");
    }
}

// 3 - Adapter
class Adaptee{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.especificaRequest();
    }
}
// 4 - UTILIZANDO O ADAPTER --------------------------
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

// Fazendo uma requisição - Requisição Especifica
cliente.criaRequest();