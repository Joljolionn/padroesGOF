class Pessoa{
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    addPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone();
        } else{
            return null;
        }
    }
}

//criando uma instancia de PessoaManager
const manager = new PessoaManager();

//Add duas pessoas
manager.addPessoa(1, 'Joao Ladrão', 19);
manager.addPessoa(2, 'Matheus', 19);
manager.addPessoa(3, 'Walisom Baitola', 23);

//clonando 1 pessoa e modificando
const pessoaClonada = manager.getPessoaById(1);
if(pessoaClonada){
    pessoaClonada.nome = 'Joao mais que ladrao';
}

//clonando uma pessoa e multiplicando
const pessoaClonada2 = manager.getPessoaById(2);
if(pessoaClonada2){
    pessoaClonada2.nome = 'Matheus Henrique';
}

console.log('Pessoa Original - 1');
console.log(manager.getPessoaById(1));

console.log('Pessoa Clonada - 1');
console.log(pessoaClonada);

console.log('Pessoa Original - 2');
console.log(manager.getPessoaById(2));

console.log('Pessoa Clonada - 2');
console.log(pessoaClonada2);