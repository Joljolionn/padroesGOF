public class Main {

    public static void main(String[] args) {

        ColecaoDeNomes nomes = new ColecaoDeNomes();
        nomes.adicionar("Ana");
        nomes.adicionar("Bruno");
        nomes.adicionar("Carlos");
        nomes.adicionar("João");
        nomes.adicionar("Maria");
        nomes.adicionar("Pedro");
        nomes.adicionar("Mohamed");
        nomes.adicionar("Zé");

        Iterador<String> iterador = nomes.criarIterador();

        while (iterador.temProximo()) {
            System.out.println(iterador.proximo());
        }
    }
}
