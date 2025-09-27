public class Folha extends Componente {

    Double preco;

    Folha(String nome, Double preco) {
        super(nome);
        this.preco = preco;
    }

    @Override
    public Double obterPreco() {
        return this.preco;
    }

}
