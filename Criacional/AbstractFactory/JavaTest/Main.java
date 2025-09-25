import Fabricas.AbstractFactory;
import Fabricas.FabricaConcreta1;
import Fabricas.FabricaConcreta2;
import Produtos.ProdutoAbstratoA;
import Produtos.ProdutoAbstratoA;
import Produtos.ProdutoAbstratoB;

/* Classe para testar implementação */
public class Main {

    /* Função cliente que recebe uma Fábrica Abstrata (contato estabelecido do
     * que ela deve receber) e que executa as funções dadas pelos produtos
     * criados pela fábrica fornecida (independente do tipo de fábrica contanto
     * que obedeça ao contrato e dos produtos contanto que obedeçam seus
     * respectivos contratos) */
    public static void clienteCod(AbstractFactory factory) {
        ProdutoAbstratoA produtoA = factory.criaProdutoA();
        ProdutoAbstratoB produtoB = factory.criaProdutoB();

        System.out.println(produtoA.metodoA());
        System.out.println(produtoB.metodoB());
    }

    public static void main(String[] args) {
        AbstractFactory factory1 = new FabricaConcreta1();
        AbstractFactory factory2 = new FabricaConcreta2();

        clienteCod(factory1);
        clienteCod(factory2);
    }
}
