// SUBSISTEMA 1
class SistemaPagamento{
    processarPagamento(valor){
        console.log(`Processando Pagamento no valor de R$${valor}`);
    }
}

// SUBSISTEMA 2
class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`Enviando Produto para ${destinatario}`);
    }
}

// SUBSISTEMA 3
class SistemaNotificacao{
    enviarEmail(destinatario, mensagem){
        console.log(`Enviando e-mail para ${destinatario}: ${mensagem}`);
    }
}

// LOJAONLINE - FAÇADE (FACHADA):
class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificacao();
    }

    realizarCompra(produto, destinatario){
        this.pagamento.processarPagamento(produto.preco);
        this.notificacao.enviarEmail(destinatario, `Pagamento Realizado com Sucesso...`);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Pedido de ${produto.nome} foi enviado..`);
    }
}

// EXEMPLO DE USO - LOJAONLINE:
const loja = new LojaOnline();

const produto = {nome: 'Camiseta', preco: 29.90};
const destinatario = 'Joao da Silva - cliente@gmail.com';

loja.realizarCompra(produto, destinatario);
