package Fabricas;

import Produtos.ProdutoAbstratoA;
import Produtos.ProdutoAbstratoB;
import Produtos.ProdutoConcretoA2;
import Produtos.ProdutoConcretoB2;

/* Implementação Concreta 2 retornando produtos do tipo 2 
(Que obedecem ao contrato de produtos) */

public class FabricaConcreta2 implements AbstractFactory {

    @Override
    public ProdutoAbstratoA criaProdutoA() {
        return new ProdutoConcretoA2();
    }

    @Override
    public ProdutoAbstratoB criaProdutoB() {
        return new ProdutoConcretoB2();
    }

}
