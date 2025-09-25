package Fabricas;

import Produtos.ProdutoAbstratoA;
import Produtos.ProdutoAbstratoB;

/* Classe para estabeler contrato ao qual às fábricas devem obedecer */
public interface AbstractFactory {

    public ProdutoAbstratoA criaProdutoA();

    public ProdutoAbstratoB criaProdutoB();
}
