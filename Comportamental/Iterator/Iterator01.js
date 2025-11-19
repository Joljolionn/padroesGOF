// 1. Interface do Iterador:
class Interador{
    temProximo(){};
    proximo(){};
}
 
// 2. Interador Concreto:
class InteradorDeNomes extends Interador{
    constructor(nomes){
        super();
        this.nomes = nomes;
        this.indice = 0;
    }
 
    temProximo(){
        return this.indice < this.nomes.length;
    }
 
    proximo(){
        return this.nomes[this.indice++];
    }
}
 
// 3. Coleção Concreta com Nomes:
class ColecaoDeNomes{
    constructor(){
        this.nomes = [];
    }
 
    adicionar(nome){
        this.nomes.push(nome);
    }
 
    criarInterador(){
        return new InteradorDeNomes(this.nomes);
    }
}
 
// 4. Uso do Padrão:
const nomes = new ColecaoDeNomes();
nomes.adicionar("Ana");
nomes.adicionar("Bruno");
nomes.adicionar("Carlos");
nomes.adicionar("João");
nomes.adicionar("Maria");
nomes.adicionar("Pedro");
nomes.adicionar("Mohamed");
nomes.adicionar("Zé");
 
const interador = nomes.criarInterador();
 
while(interador.temProximo()){
    console.log(interador.proximo());
}
