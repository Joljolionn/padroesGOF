// Objeto Real
class ServicoReal {
    executar(){
        console.log("Objeto Real - Executando o Serviço Real")

    }

}

// Proxy - Procurador

class ProxyServicoReal{
    constructor(){
        this.servicoReal = new ServicoReal();
    }

    executar(){
        console.log("Proxy - Antes da execução do Serviço Real")
        this.servicoReal.executar()
        console.log("Proxy - Depois da execução do Serviço Real")
    }
}

// Uso do proxy

const proxy = new ProxyServicoReal();
proxy.executar();