import threading

class Aeronave:
    def __init__(self, prefixo, tipo) -> None:
        self.prefixo = prefixo
        self.tipo = tipo
        self.mediator = None 

    def definirMediator(self, mediator):
        self.mediator = mediator

    def identificacao(self):
        return f"{self.tipo} - {self.prefixo}"

    def solicitar(self, tipo, dados=None):
        if dados is None:
            dados = {}
            
        if self.mediator is not None:
            self.mediator.notificar(self, tipo, dados)
        else:
            print("Mediator não definido para a aeronave.")

    def solicitar_pouso(self):
        self.solicitar("pouso")

    def solicitar_decolagem(self):
        self.solicitar("decolagem")

    def declarar_emergencia(self, motivo):
        self.solicitar("emergencia", {"emergencia": True, "motivo": motivo})


class TorreDeControle:
    def __init__(self) -> None:
        self.aeronaves = set() 
        self.pistaLivre = True
        self.fila = []

    def registrar(self, aeronave: Aeronave) -> None:
        aeronave.definirMediator(self)
        self.aeronaves.add(aeronave)

    def avisar_outros(self, remetente, msg):
        for a in self.aeronaves:
            if a is not remetente:
                print(f"[AVISO] {a.identificacao()} -> {msg}")
                print("-" * 50)

    def decolagem(self, aeronave: Aeronave):
        print(f"[OK] Decolagem Autorizada: {aeronave.identificacao()}")
        print("-" * 50)
        
        def callback():
            print(f"[END] Decolou: {aeronave.identificacao()}")
            print("-" * 50)
            self.pistaLivre = True
            self.avisar_outros(aeronave, "decolou")
            self.processar()

        t = threading.Timer(1.5, callback)
        t.start()

    def emergencia(self, aeronave: Aeronave, dados):
        motivo = dados.get("motivo", "Desconhecido")
        print(f"[OK] EMERGENCIA: {aeronave.identificacao()} - {motivo}")
        print("-" * 50)
        
        def callback():
            print(f"[END] Emergência Atendida: {aeronave.identificacao()}")
            print("-" * 50)
            self.pistaLivre = True
            self.avisar_outros(aeronave, "emergência atendida")
            self.processar()

        t = threading.Timer(1.5, callback)
        t.start()

    def pouso(self, aeronave: Aeronave):
        print(f"[OK] Pouso Autorizado: {aeronave.identificacao()}")
        print("-" * 50)
        
        def callback():
            print(f"[END] Pousou: {aeronave.identificacao()}")
            print("-" * 50)
            self.pistaLivre = True
            self.avisar_outros(aeronave, "pousou")
            self.processar()

        t = threading.Timer(1.5, callback)
        t.start()

    def processar(self):
        if not self.pistaLivre or len(self.fila) == 0:
            return
        
        # Remove o primeiro da fila
        evento = self.fila.pop(0)
        self.pistaLivre = False

        tipo = evento["tipo"]
        remetente = evento["remetente"]
        dados = evento["dados"]

        if tipo == "pouso":
            self.pouso(remetente)
        elif tipo == "decolagem":
            self.decolagem(remetente)
        elif tipo == "emergencia":
            self.emergencia(remetente, dados)

    def notificar(self, remetente: Aeronave, tipo, dados=None):
        if dados is None:
            dados = {}

        if remetente.mediator is None:
            print("Aeronave não registrada com o Mediator.")
            return

        prioridade = 0 if dados.get("emergencia") else 1
        
        evento = {
            "remetente": remetente, 
            "tipo": tipo, 
            "dados": dados, 
            "prioridade": prioridade
        }

        if prioridade == 0:
            self.fila.insert(0, evento)
        else:
            self.fila.append(evento)

        self.processar()

class Aviao(Aeronave):
    def __init__(self, prefixo) -> None:
        super().__init__(prefixo, "Avião")

class Helicoptero(Aeronave):
    def __init__(self, prefixo) -> None:
        super().__init__(prefixo, "Helicoptero")

class UltraLeve(Aeronave):
    def __init__(self, prefixo) -> None:
        super().__init__(prefixo, "Ultraleve")

def main():
    torre = TorreDeControle()
    aviao = Aviao("PT-AVA")
    helicoptero = Helicoptero("PT-HEL")
    ultraleve = UltraLeve("PT-ULI")

    torre.registrar(aviao)
    torre.registrar(helicoptero)
    torre.registrar(ultraleve)

    aviao.solicitar_pouso()
    helicoptero.solicitar_decolagem()
    ultraleve.declarar_emergencia("Falha Elétrica")

if __name__ == "__main__":
    main()
