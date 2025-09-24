// Link do VSCode - Shared: https://dontpad.com/f217-tpii-250919

// Estrutura Componente:
class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){}

    remover(){}

    obterNome(){}
}

// Estrutura Folha:
class Folha extends Componente{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

// Estrutura Conteiner que irá compor (Componente):
class Conteiner extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }

    adicionar(componente){
        this.componentes.push(componente);
    }

    remover(componente){
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;
        this.componentes.forEach(componente => {
            preco += componente.obterPreco()
        });
        return preco;
    }
}

// Exemplo de Uso - Supermercado:
const maca = new Folha('Maçã', 2.00);
const laranja = new Folha('Laranja', 3.00);
const uva = new Folha('Uva', 5.00);

const frutas = new Conteiner('Frutas');
frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);

const caixa = new Conteiner('Compra Total');