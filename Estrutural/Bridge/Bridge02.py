class Cor:
    def __init__(self, cor):
        self.cor = cor

    def getCor(self):
        return self.cor

class corVermelha(Cor):
    def __init__(self):
        super().__init__("Vermelha")

class corVerde(Cor):
    def __init__(self):
        super().__init__("Verde")

class corAzul(Cor):
    def __init__(self):
        super().__init__("Azul")

class Forma:
    def __init__(self, cor):
        self.cor = cor
    
    def setCor(self, cor):
        self.cor = cor
    
    def desenhar(self):
        print("Esse método precisa ser implementado pela subclasse")


class Circulo(Forma):
    def desenhar(self):
        print(f'Desenhando um circulo {self.cor.getCor()}')

class Quadrado(Forma):
    def desenhar(self):
        print(f'Desenhando um quadrado {self.cor.getCor()}')

class Triangulo(Forma):
    def desenhar(self):
        print(f'Desenhando um triangulo {self.cor.getCor()}')

vermelho = corVermelha()
verde = corVerde()
azul = corAzul()

circulo1 = Circulo(vermelho)
circulo2 = Circulo(azul)
circulo3 = Circulo(verde)

quadrado1 = Quadrado(vermelho)
quadrado2 = Quadrado(azul)
quadrado3 = Quadrado(verde)

triangulo1 = Triangulo(vermelho)
triangulo2 = Triangulo(azul)
triangulo3 = Triangulo(verde)

circulo1.desenhar()
circulo2.desenhar()
circulo3.desenhar()

quadrado1.desenhar()
quadrado2.desenhar()
quadrado3.desenhar()

triangulo1.desenhar()
triangulo2.desenhar()
triangulo3.desenhar()