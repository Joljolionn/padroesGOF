import threading

class TorreDeControle:

    def __init__(self) -> None:
        self.fila = list()
        self.manutencao = None
        self.combustivel = None

    def set_components(self, manutencao, combustivel):
        self.manutencao = manutencao
        self.combustivel = combustivel

    def solicitar_decolagem(self, aeronave, falha_tecnica):
        ticket = Ticket(aeronave, falha_tecnica)
        print(f"[Torre] Recebendo solicitacao: {ticket.aeronave.prefixo}")

        if ticket.falha_tecnica:
            print(f"[Torre] FALHA TECNICA DETECTADA: {ticket.aeronave.prefixo}")
            ticket.prioridade = True
            self.fila.insert(0, ticket)
        else:
            self.fila.append(ticket)
        
        self.processar()

    def processar(self):
        if len(self.fila) == 0:
            return

        ticket_candidato = self.fila[0]
        componente_destino = None
        etapa = ""

        if not ticket_candidato.manutencao_ok:
            componente_destino = self.manutencao
            etapa = "manutencao"
        elif not ticket_candidato.abastecimento_ok:
            componente_destino = self.combustivel
            etapa = "combustivel"
        else:
            ticket = self.fila.pop(0)
            print(f"[Torre] Pista liberada. {ticket.aeronave.prefixo} DECOLOU.")
            self.processar()
            return

        if componente_destino and componente_destino.is_livre:
            ticket = self.fila.pop(0)

            if etapa == "manutencao":
                self.manutencao.verificar(ticket)
            elif etapa == "combustivel":
                self.combustivel.abastecer(ticket)
        else:
            pass

class Componente:
    def __init__(self, torre: TorreDeControle) -> None:
        self.torre = torre
        self.is_livre = True

class Ticket:
    def __init__(self, aeronave, falha_tecnica) -> None:
        self.aeronave = aeronave
        self.falha_tecnica = falha_tecnica
        self.manutencao_ok = False
        self.abastecimento_ok = False

class EquipeManutencao(Componente):
    def verificar(self, ticket):
        print(f"[Manutencao] Verificando {ticket.aeronave.prefixo}")
        self.is_livre = False

        def callback():
            print(f"[Manutencao] {ticket.aeronave.prefixo} liberado.")
            ticket.manutencao_ok = True
            self.is_livre = True
            
            self.torre.fila.insert(0, ticket)
            self.torre.processar()

        t = threading.Timer(2.0, callback) 
        t.start()

class EquipeCombustivel(Componente):
    def abastecer(self, ticket):
        print(f"[Combustivel] Abastecendo {ticket.aeronave.prefixo}")
        self.is_livre = False

        def callback():
            print(f"[Combustivel] {ticket.aeronave.prefixo} tanque cheio.")
            ticket.abastecimento_ok = True
            self.is_livre = True
            
            self.torre.fila.insert(0, ticket)
            self.torre.processar()

        t = threading.Timer(1.0, callback)
        t.start()

class Aeronave(Componente):
    def __init__(self, torre: TorreDeControle, prefixo) -> None:
        super().__init__(torre)
        self.prefixo = prefixo

    def decolar(self, falha_tecnica=False):
        self.torre.solicitar_decolagem(self, falha_tecnica)

def main():
    torre = TorreDeControle()

    manutencao = EquipeManutencao(torre)
    combustivel = EquipeCombustivel(torre)

    torre.set_components(manutencao, combustivel)

    a1 = Aeronave(torre, "LATAM-01")
    a2 = Aeronave(torre, "GOL-02")
    a3 = Aeronave(torre, "BOING-03") 

    a1.decolar(falha_tecnica=False)
    
    a2.decolar(falha_tecnica=False)

    a3.decolar(falha_tecnica=True)

if __name__ == "__main__":
    main()
