// Interface da Abstract Factory

class AbstractFactory {
    criaProdutoA(){}
    criaProdutoB(){}
}

// Fabrica 1 Concreta que cria produto do tipo A e B

class FabricaConcreta1 extends AbstractFactory {
    criaProdutoA(){
        return new ProdutoConcretoA1()
    }
    criaProdutoB(){
        return new ProdutoConcretoB1()
    }
}

// Fabrica 2 Concreta que cria produto do tipo A e B

class FabricaConcreta2 extends AbstractFactory {
    criaProdutoA(){
        return new ProdutoConcretoA2()
    }
    criaProdutoB(){
        return new ProdutoConcretoB2()
    }
}

// Interface dos produtos do tipo A

class ProdutoAbstratoA {
    metodoA(){}
}

// Interface dos produtos do tipo B

class ProdutoAbstratoB {
    metodoB(){}
}

// Implementação Concreta do produto do tipo A - Fabrica 1

class ProdutoConcretoA1 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do tipo A da Fabrica 1"
    }
}

// Implementação Concreta do produto do tipo A - Fabrica 2

class ProdutoConcretoA2 extends ProdutoAbstratoA{
    metodoA(){
        return "Produto do tipo A da Fabrica 2"
    }
}

// Implementação Concreta do produto do tipo B - Fabrica 1

class ProdutoConcretoB1 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do tipo B da Fabrica 1"
    }
}

// Implementação Concreta do produto do tipo B - Fabrica 2

class ProdutoConcretoB2 extends ProdutoAbstratoB{
    metodoB(){
        return "Produto do tipo B da Fabrica 2"
    }
}

// USO DO PADRÃO ABSTRACT FACTORY - IMPLEMENTAÇÃO

function clienteCod(factory){
    const produtoA = factory.criaProdutoA()
    const produtoB = factory.criaProdutoB()

    console.log(produtoA.metodoA())
    console.log(produtoB.metodoB())
}

// Exemplo de uso da Fabrica 1

const factory1 = new FabricaConcreta1()

clienteCod(factory1)

// Exemplo de uso da Fabrica 2

const factory2 = new FabricaConcreta2()

clienteCod(factory2)