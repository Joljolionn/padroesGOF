public class Main {

    public static void main(String[] args) {

        Componente maca = new Folha("Maçã", 2.00);
        Componente laranja = new Folha("Laranja", 3.00);
        Componente uva = new Folha("Uva", 5.00);
        Componente abacate = new Folha("Abacate", 10.00);

        Conteiner frutas = new Conteiner("Frutas");
        frutas.adicionar(maca);
        frutas.adicionar(laranja);
        frutas.adicionar(uva);

        Conteiner caixa = new Conteiner("Compra Total");
        caixa.adicionar(frutas);
        caixa.adicionar(abacate);
        System.out.println(caixa.obterPreco());
    }
}
