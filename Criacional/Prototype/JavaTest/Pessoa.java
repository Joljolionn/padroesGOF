public class Pessoa {

    public int id;
    public String nome;
    public int idade;


    Pessoa(int id, String nome, int idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    public Pessoa clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}
