public abstract class Componente {
    private String nome;
    Componente(String nome){
        this.nome = nome;
    }

    public String obterNome(){
        return this.nome;
    }

    public abstract Double obterPreco();
    
}
