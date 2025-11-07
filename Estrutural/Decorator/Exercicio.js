/************************************************************
 * 1) COMPOSITE — Itens do pedido de uma pizzaria            *
 ************************************************************/
 
// Contrato comum para qualquer item do pedido (produto ou conjunto)
class ItemDePedido {
  obterPreco() { throw new Error('Precisa implementar obterPreco()'); }
  obterNome()  { throw new Error('Precisa implementar obterNome()'); }
}
 
// Folha — Produto simples (ex.: "Metade Calabresa", "Refrigerante 2L")
class Produto extends ItemDePedido {
  constructor(nome, preco) {
    super();
    this.nome = nome;                // nome do item
    this.preco = Number(preco) || 0; // preço do item
  }
  obterPreco() { return this.preco; }
  obterNome()  { return this.nome; }
}
 
// Composite — Conjunto que pode conter outros conjuntos e produtos
// Exemplos: "Pizza Grande Meio a Meio", "Combo Família", "Bebidas"
class ConjuntoDeItens extends ItemDePedido {
  constructor(nome) {
    super();
    this.nome = nome;                        // nome do conjunto
    this.itensInternos = [];                 // filhos do conjunto
    this.custoExtraDoConjunto = 0;           // ex.: borda recheada, caixa especial
  }
 
  adicionar(item) {                          // adiciona filho ao conjunto
    this.itensInternos.push(item);
    return this;
  }
 
  remover(item) {                            // remove filho do conjunto
    this.itensInternos = this.itensInternos.filter(i => i !== item);
    return this;
  }
 
  definirCustoExtra(valor) {                 // custo adicional específico do conjunto
    this.custoExtraDoConjunto = Number(valor) || 0;
    return this;
  }
 
  obterPreco() {                             // soma dos preços dos filhos + custo extra
    const subtotal = this.itensInternos.reduce((total, item) => total + item.obterPreco(), 0);
    return subtotal + this.custoExtraDoConjunto;
  }
 
  obterNome() { return this.nome; }
 
  // Utilitário didático: imprime a árvore com indentação
  descreverArvore(nivel = 0) {
    const espacos = ' '.repeat(nivel);
    const cabecalho = `${espacos}- ${this.obterNome()} (Conjunto) → R$ ${this.obterPreco().toFixed(2)}`;
 
    const linhasDosFilhos = this.itensInternos.map(item => {
      if (item instanceof ConjuntoDeItens) {
        return item.descreverArvore(nivel + 2); // imprime recursivamente
      }
      return `${' '.repeat(nivel + 2)}• ${item.obterNome()} (Produto) → R$ ${item.obterPreco().toFixed(2)}`;
    }).join('\n');
 
    const linhaCustoExtra = this.custoExtraDoConjunto
      ? `\n${' '.repeat(nivel + 2)}(Custo extra do conjunto: R$ ${this.custoExtraDoConjunto.toFixed(2)})`
      : '';
 
    return [cabecalho, linhasDosFilhos, linhaCustoExtra].filter(Boolean).join('\n');
  }
}
 
/***********************************************************
 * 2) DECORATOR — Empilhamento de canais de notificação     *
 ***********************************************************/
 
// Contrato para notificadores
class Notificador {
  enviar(mensagem, destinatario) { throw new Error('Precisa implementar enviar()'); }
}
 
// Componente concreto base — E-mail
class NotificadorEmail extends Notificador {
  enviar(mensagem, destinatario) {
    if (destinatario.email) {
      console.log(`Email para ${destinatario.email}: ${mensagem}`);
    }
  }
}
 
// Decorador base — mantém interface e delega
class DecoradorDeNotificacao extends Notificador {
  constructor(notificador) {
    super();
    this.notificadorInterno = notificador; // quem será decorado (pode ser outro decorador)
  }
  enviar(mensagem, destinatario) {
    if (this.notificadorInterno) {
      this.notificadorInterno.enviar(mensagem, destinatario);
    }
  }
}
 
// Decorador concreto — SMS
class NotificadorSMS extends DecoradorDeNotificacao {
  enviar(mensagem, destinatario) {
    super.enviar(mensagem, destinatario);
    if (destinatario.sms) {
      console.log(`SMS para ${destinatario.sms}: ${mensagem}`);
    }
  }
}
 
// Decorador concreto — WhatsApp
class NotificadorWhatsApp extends DecoradorDeNotificacao {
  enviar(mensagem, destinatario) {
    super.enviar(mensagem, destinatario);
    if (destinatario.whatsapp) {
      console.log(`WhatsApp para ${destinatario.whatsapp}: ${mensagem}`);
    }
  }
}
 
/****************************************************
 * 3) PEDIDO — Une Composite (itens) + Decorator     *
 ****************************************************/
 
class Pedido {
  constructor(dadosDoCliente, arvoreDeItens /* ConjuntoDeItens */) {
    this.cliente = dadosDoCliente;         // { nome, email, sms, whatsapp }
    this.raizDosItens = arvoreDeItens;     // nó raiz do Composite (árvore de itens)
    this.status = 'ABERTO';                // estado do pedido
  }
 
  obterTotal() {                           // total do pedido
    return this.raizDosItens.obterPreco();
  }
 
  gerarResumoTexto() {                     // texto legível no console
    return [
      `Cliente: ${this.cliente.nome}`,
      `Itens:`,
      this.raizDosItens.descreverArvore(2),
      `Total: R$ ${this.obterTotal().toFixed(2)}`
    ].join('\n');
  }
 
  realizarCheckout(notificador /* Notificador ou Decorador */) {
    if (this.status !== 'ABERTO') {
      throw new Error('Pedido já finalizado.');
    }
    this.status = 'PAGO';
    const mensagemConfirmacao = `Seu pedido de pizza foi confirmado! Total: R$ ${this.obterTotal().toFixed(2)}`;
    notificador.enviar(mensagemConfirmacao, this.cliente);
    return mensagemConfirmacao;
  }
}
 
/************************************************************
 * 4) DEMONSTRAÇÃO — Pedido de pizzaria com 3 níveis        *
 ************************************************************/
 
// Nível 0 (raiz): o pedido referencia um conjunto raiz
const conjuntoRaizDoPedido = new ConjuntoDeItens('Pedido #PZ-2025-0001').definirCustoExtra(8.90); // taxa de entrega
 
// Nível 1: combos principais
const comboFamilia = new ConjuntoDeItens('Combo Família');
const bebidas = new ConjuntoDeItens('Bebidas');
 
// Nível 2: pizzas e agrupamentos internos
const pizzaGrandeMeioAMeio = new ConjuntoDeItens('Pizza Grande Meio a Meio').definirCustoExtra(7.50); // borda recheada
const pizzaMediaPortuguesa = new ConjuntoDeItens('Pizza Média Portuguesa');
 
// Nível 3: sabores (folhas) e adicionais
pizzaGrandeMeioAMeio
  .adicionar(new Produto('Metade Calabresa', 34.90))
  .adicionar(new Produto('Metade Marguerita', 32.90))
  .adicionar(new Produto('Adicional Queijo Extra', 5.90));
 
pizzaMediaPortuguesa
  .adicionar(new Produto('Base Portuguesa', 39.90))
  .adicionar(new Produto('Adicional Azeitonas', 3.50));
 
bebidas
  .adicionar(new Produto('Refrigerante 2L', 12.90))
  .adicionar(new Produto('Água com gás 500ml', 5.50));
 
comboFamilia
  .adicionar(pizzaGrandeMeioAMeio)
  .adicionar(pizzaMediaPortuguesa);
 
conjuntoRaizDoPedido
  .adicionar(comboFamilia)
  .adicionar(bebidas)
  .definirCustoExtra(4.00); // caixa térmica/embalagem adicional
 
// Dados do cliente
const cliente = {
  nome: 'Cliente da Pizzaria',
  email: 'cliente.pizza@example.com',
  sms: '+55 11 90000-0000',
  whatsapp: '+55 11 90000-0000'
};
 
// Criação e execução do pedido
const pedido = new Pedido(cliente, conjuntoRaizDoPedido);
 
console.log('===== RESUMO DO PEDIDO (PIZZARIA) =====');
console.log(pedido.gerarResumoTexto());
 
// Cadeia de notificações: Email → SMS → WhatsApp
let notificador = new NotificadorEmail();
notificador = new NotificadorSMS(notificador);
notificador = new NotificadorWhatsApp(notificador);
 
console.log('\n===== MENSAGEM DE CONFIRMAÇÃO AO CLIENTE =====');
const mensagemDeConfirmacao = pedido.realizarCheckout(notificador);
console.log('Confirmação:', mensagemDeConfirmacao);