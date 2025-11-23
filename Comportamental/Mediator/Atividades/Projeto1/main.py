import random
import threading
import time

class HospitalCentral:

    def __init__(self) -> None:
        self.pacientes = set()
        self.fila = list()
        self.triagem = None
        self.medico = None
        self.laboratorio = None
        self.farmacia = None

    def set_components(self, enfermeira_de_triagem, medico, laboratorio, farmacia):
        self.triagem = enfermeira_de_triagem
        self.medico = medico
        self.laboratorio = laboratorio
        self.farmacia = farmacia

    def atender(self, paciente, motivo):
        self.pacientes.add(paciente)
        self.triagem.analisar(paciente, motivo) 

    def processar(self):
        if len(self.fila) == 0:
            return

        ticket_candidato = self.fila[0]
        componente_destino = None

        if ticket_candidato.exame is None:
            componente_destino = self.medico
        elif ticket_candidato.exame == True:
            componente_destino = self.laboratorio
        elif ticket_candidato.exame == False:
            componente_destino = self.farmacia

        if componente_destino and componente_destino.is_livre:
            ticket = self.fila.pop(0)

            if componente_destino == self.medico:
                self.medico.atender(ticket)
            elif componente_destino == self.laboratorio:
                self.laboratorio.exame(ticket)
            elif componente_destino == self.farmacia:
                self.farmacia.retirar_medicamento(ticket)
        else:
            pass

class Componente:
    def __init__(self, hospital: HospitalCentral) -> None:
        self.hospital = hospital
        self.is_livre = True

class Ticket:
    def __init__(self, paciente, motivo, exame) -> None:
        self.paciente = paciente
        self.motivo = motivo
        self.exame = exame
        self.urgente = False

class EnfermeiraDeTriagem(Componente):

    def analisar(self, paciente, motivo):
        ticket = Ticket(paciente, motivo, None)
        print(f"[Triagem] Recebendo: {ticket.paciente.nome}")
        self.is_livre = False

        def callback():
            if "URGENTE" in ticket.motivo:
                print(f"[Triagem] URGÊNCIA DETECTADA: {ticket.paciente.nome}")
                ticket.urgente = True
                self.hospital.fila.insert(0, ticket)
            else:
                print(f"[Triagem] Classificação Comum: {ticket.paciente.nome}")
                self.hospital.fila.append(ticket)
            
            self.is_livre = True
            
            self.hospital.processar()

        t = threading.Timer(0.5, callback)
        t.start()

class Medico(Componente):
    def __init__(self, hospital: HospitalCentral) -> None:
        super().__init__(hospital)

    def atender(self, ticket):
        print(f"[Médico] Iniciando atendimento de {ticket.paciente.nome}")
        self.is_livre = False

        def callback():
            exame = random.choice([True, False])
            if exame:
                print(f"[Médico] {ticket.paciente.nome} -> Pedido de EXAME")
                ticket.exame = True
            else:
                print(f"[Médico] {ticket.paciente.nome} -> Receita de REMÉDIO")
                ticket.exame = False
            
            self.is_livre = True
            
            print(f"{ticket.paciente.nome} retorna para a fila prioritária (pós-consulta).")
            self.hospital.fila.insert(0, ticket)
            self.hospital.processar()

        t = threading.Timer(3.0, callback) 
        t.start()

class Laboratorio(Componente):
    def exame(self, ticket):
        print(f"[Laboratório] Coletando exames de {ticket.paciente.nome}")
        self.is_livre = False

        def callback():
            print(f"[Laboratório] Exame de {ticket.paciente.nome} completo.")
            self.is_livre = True
            self.hospital.processar()

        t = threading.Timer(1.0, callback)
        t.start()

class Farmacia(Componente):
    def retirar_medicamento(self, ticket):
        print(f"[Farmácia] Atendendo {ticket.paciente.nome}")
        self.is_livre = False

        def callback():
            print(f"[Farmácia] {ticket.paciente.nome} retirou medicamento.")
            self.is_livre = True
            self.hospital.processar()

        t = threading.Timer(1.0, callback)
        t.start()

class Paciente(Componente):
    def __init__(self, hospital: HospitalCentral, nome) -> None:
        super().__init__(hospital)
        self.nome = nome

    def solicitar_atendimento(self, motivo):
        self.hospital.atender(self, motivo)

def main():
    hospital = HospitalCentral()

    triagem = EnfermeiraDeTriagem(hospital)
    medico = Medico(hospital)
    laboratorio = Laboratorio(hospital)
    farmacia = Farmacia(hospital)

    hospital.set_components(triagem, medico, laboratorio, farmacia)

    p1 = Paciente(hospital, "João")
    p2 = Paciente(hospital, "Pedro")
    p3 = Paciente(hospital, "Maria do carmo")

    p1.solicitar_atendimento("Dor de cabeça")
    p2.solicitar_atendimento("Gripe")
    p3.solicitar_atendimento("URGENTE: Braço quebrado")


if __name__ == "__main__":
    main()
