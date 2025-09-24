class AbstractFactory:
    def criaProdutoA(self):
        raise NotImplementedError("O método deve ser implementado pela subclasse")
        
    def criaProdutoB(self):
        raise NotImplementedError("O método deve ser implemtad pela subclasse")
    
class FabricaConcreta1(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA1()

    def criaProdutoB(self):
        return ProdutoConcretoB1()

class FabricaConcreta2(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA2()

    def criaProdutoB(self):
        return ProdutoConcretoB2()

class ProdutoAbstratoA:
    def metodoA(self):
        raise NotImplementedError("O método deve ser implementado pela subclasse")
 
class ProdutoAbstratoB:
    def metodoB(self):
        raise NotImplementedError("O método deve ser implementado pela subclasse")  

class ProdutoConcretoA1(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do tipo A da Fabrica 1"

class ProdutoConcretoA2(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do tipo A da Fabrica 2"

class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do tipo B da Fabrica 1"

class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do tipo B da Fabrica 2"

def clienteCod(factory: AbstractFactory):
    produtoA: ProdutoAbstratoA = factory.criaProdutoA()
    produtoB: ProdutoAbstratoB = factory.criaProdutoB()

    print(produtoA.metodoA())
    print(produtoB.metodoB())

factory1 = FabricaConcreta1()

clienteCod(factory1)

factory2 = FabricaConcreta2()

clienteCod(factory2)



