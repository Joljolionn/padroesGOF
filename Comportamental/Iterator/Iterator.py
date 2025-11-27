class Iterador:
    def temProximo(self):
        raise NotImplementedError

    def proximo(self):
        raise NotImplementedError


class IteradorDeNomes(Iterador):
    def __init__(self, nomes) -> None:
        super().__init__()
        self.nomes = nomes
        self.indice = 0
    
    def temProximo(self):
        return self.indice < len(self.nomes)

    def proximo(self):
        atual = self.nomes[self.indice]
        self.indice += 1
        return atual

class ColecaoDeNomes:
    def __init__(self) -> None:
        self.nomes = []

    def adicionar(self, nome):
        self.nomes.append(nome)

    def criatIterador(self):
        return IteradorDeNomes(self.nomes)

nomes = ColecaoDeNomes()

nomes.adicionar("Ana")
nomes.adicionar("Bruno")
nomes.adicionar("Carlos")
nomes.adicionar("João");
nomes.adicionar("Maria");
nomes.adicionar("Pedro");
nomes.adicionar("Mohamed");
nomes.adicionar("Zé");
 
iterador = nomes.criatIterador()

while(iterador.temProximo()):
    print(iterador.proximo())
