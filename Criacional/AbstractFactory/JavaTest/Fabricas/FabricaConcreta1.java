package Fabricas;

import Produtos.ProdutoAbstratoA;
import Produtos.ProdutoAbstratoB;
import Produtos.ProdutoConcretoA1;
import Produtos.ProdutoConcretoB1;

/* Implementação Concreta 1 retornando produtos do tipo 1 
(Que obedecem ao contrato de produtos) */

public class FabricaConcreta1 implements AbstractFactory{

	@Override
	public ProdutoAbstratoA criaProdutoA() {
        return new ProdutoConcretoA1();
	}

	@Override
	public ProdutoAbstratoB criaProdutoB() {
        return new ProdutoConcretoB1();
	}

}
