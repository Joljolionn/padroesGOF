# Classe Base de Veiculo:
class Veiculo:
    def __init__(self, modelo):
       self.modelo = modelo 

    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")

# Subclasses de Veiculo:
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Caminhao(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

# Fabrica Abstrata de Veiculo:
class FabricaDeVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("O método deve ser implementado pela subclasses")

# Fabrica Concreta de Carro:
class FabricaDeCarro(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Carro(modelo)

# Fabrica Concreta de Moto:
class FabricaDeMoto(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Moto(modelo)

# Fabrica Concreta de Caminhao:
class FabricaDeCaminhao(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Caminhao(modelo)

# USO DO PADRAO DO PROJETO - FABRICA:
fabricaDeCarro = FabricaDeCarro()
fabricaDeMoto = FabricaDeMoto()
fabricaDeCaminhao = FabricaDeCaminhao()

carro1 = fabricaDeCarro.criarVeiculo('Sedan')
carro2 = fabricaDeCarro.criarVeiculo('Esportivo')
moto1 = fabricaDeMoto.criarVeiculo('Yamanha-660')
moto2 = fabricaDeMoto.criarVeiculo('Honda-CG160')
caminhao1 = fabricaDeCaminhao.criarVeiculo('Scania')
caminhao2 = fabricaDeCaminhao.criarVeiculo('VW-Cargo')

carro1.mostrarDetalhes()
carro2.mostrarDetalhes()
moto1.mostrarDetalhes()
moto2.mostrarDetalhes()
caminhao1.mostrarDetalhes()
caminhao2.mostrarDetalhes()