class ServicoReal:
    def executar(self):
        print("Objeto Real - Executando o Serviço Real")

class ProxyServicoReal:
    def __init__(self):
        self.servico_real = ServicoReal()
    
    def executar(self):
        print("Proxy - Antes da execução do Serviço Real")
        self.servico_real.executar()
        print("Proxy - Depois da execução do Serviço Real")
    
proxy = ProxyServicoReal()
proxy.executar()