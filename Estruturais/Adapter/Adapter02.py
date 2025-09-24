from urllib import request


class AplicacaoCliente:
    def request(self):
        pass

class Cliente:
    def __init__(self, target):
        self.target = target
    def criarRquest(self):
        print("Cliente - fazendo uma requisição")
        self.target.request()

class Adaptee:
    def especificaRequest(self):
        print("Requisiçaõ especifica de Adaotee")

class Adapter:
    def __init__(self, adapter):
        self.adapter = adapter
    
    def request(self):
        self.adapter.especificaRequest()

adaptee = Adaptee()
adapter = Adapter(adaptee)
cliente = Cliente(adapter)

cliente.criarRquest()