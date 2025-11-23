class DescontoHandler():
    def __init__(self):
        self.proximo = None

    def set_proximo(self, proximo):
        self.proximo = proximo

    def aprovar_desconto(self, percentual):
        raise NotImplementedError("Esse método deve ser implementado pelas subclasses")

class Vendedor(DescontoHandler):
    def aprovar_desconto(self, percentual):
        if percentual <= 0.025:
            print(f"Vendedor aprovou o desconto de {percentual*100}%")
        elif self.proximo is not None:
            self.proximo.aprovar_desconto(percentual)
        else:
            print("Desconto não pode ser aprovado.")

class Gerente(DescontoHandler):
    def aprovar_desconto(self, percentual):
        if percentual <= 0.05:
            print(f"Gerente aprovou o desconto de {percentual*100}%")
        elif self.proximo is not None:
            self.proximo.aprovar_desconto(percentual)
        else:
            print("Desconto não pode ser aprovado.")

class Diretor(DescontoHandler):
    def aprovar_desconto(self, percentual):
        if percentual <= 0.10:
            print(f"Diretor aprovou o desconto de {percentual*100}%")
        elif self.proximo is not None:
            self.proximo.aprovar_desconto(percentual)
        else:
            print("Desconto não pode ser aprovado.")

class CEO(DescontoHandler):
    def aprovar_desconto(self, percentual):
        print(f"CEO aprovou o desconto de {percentual*100}%")

vendedor = Vendedor()
gerente = Gerente()
diretor = Diretor()
ceo = CEO()

vendedor.set_proximo(gerente)
gerente.set_proximo(diretor)
diretor.set_proximo(ceo)

vendedor.aprovar_desconto(0.02);
vendedor.aprovar_desconto(0.09);
vendedor.aprovar_desconto(0.03);
vendedor.aprovar_desconto(0.20);
