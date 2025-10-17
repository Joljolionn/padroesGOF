class ProdutoFlyweight:
    def __init__(self, id):
        self.id = id
 
    def exibir_detalhes(self, nome, preco):
        print(f"ID: {self.id} | R${preco:.2f} | PROD: {nome}")
 
 
class FlyweightFactory:
    def __init__(self):
        self.flyweights = {}
 
    def get_flyweight(self, id):
        if id not in self.flyweights:
            self.flyweights[id] = ProdutoFlyweight(id)
        return self.flyweights[id]
 
 
class Cliente:
    def __init__(self):
        self.fabrica_flyweight = FlyweightFactory()
        self.pedidos = []
 
    def adicionar_pedido(self, id, nome, preco):
        flyweight = self.fabrica_flyweight.get_flyweight(id)
        self.pedidos.append((flyweight, nome, preco))
 
    def exibir_pedidos(self):
        print("Pedidos do Cliente:")
        for flyweight, nome, preco in self.pedidos:
            flyweight.exibir_detalhes(nome, preco)
 
 
valor = 99.99
cliente = Cliente()
cliente.adicionar_pedido("001", "camisa", 39.90)
cliente.adicionar_pedido("002", "calça", 79.90)
cliente.adicionar_pedido("001", "camisa", 39.90)
cliente.adicionar_pedido("003", "tênis", 129.90)
cliente.adicionar_pedido("002", "bone", valor)
cliente.exibir_pedidos()