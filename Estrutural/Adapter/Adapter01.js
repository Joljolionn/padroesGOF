class AplicacaoCliente{
    request() {}
}

class Cliente{
    constructor(target){
        this.target = target
    }

    criarRequest(){
        console.log("Cliente - fazendo uma requisição!")
        this.target.request()
    }
}

// Adapteee
class Adaptee{
    especificaRequest(){
        console.log("Requisição especifica do Adaptee")
    }
}

class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee
    }

    request(){
        this.adaptee.especificaRequest()
    }
}

// Utilizando adaptar
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

cliente.criarRequest();