// Objeto Real - Classe Produto

class Produto {
    constructor(nome, preco, codEAN) {
        this.nome = nome
        this.preco = preco
        this.codEAN = codEAN
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome} | R$${this.preco.toFixed(2)} | CodEAN: ${this.codEAN}`)
    }

}

// Proxy - ProxyProduto

class ProxyProduto {
    constructor(produto) {
        this.produto = produto;
    }

    exibirDetalhes() {
        console.log("Autenticando no Sistema...");
        this.autenticar()
        console.log("Autenticação Realizada com sucesso...")

        this.produto.exibirDetalhes()

        console.log("Registrando no sistema...")

        /// funcionalidade 2 -
        console.log("Operação concluída...")
    }
    autenticar(){
        console.log(" >> Autenticando usuário")
        console.log(" >> Consultando Dados")
        console.log(" >> Autenticação OK")
    }
}

// Uso do Padrao

const produtoReal1 = new Produto("Camiseta", 48.90, "123123123123")
const produtoReal2 = new Produto("Boné", 29.50, "24342352352")

const ProxyProduto1 = new ProxyProduto(produtoReal1)
const ProxyProduto2 = new ProxyProduto(produtoReal2)

ProxyProduto1.exibirDetalhes()
ProxyProduto2.exibirDetalhes()