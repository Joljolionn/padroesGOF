class Usuario{
    constructor(nome, cargo){
        this.nome = nome;
        this.cargo = cargo;
    }

    mostrarDetalhes(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
    }

    criarUsuario(nome, cargo){
        throw new Error('O metodo deve ser implementado pela subclasses');
    }
}

class Aluno extends Usuario{
    constructor(nome, cargo){
        super(nome, cargo);
    }
}