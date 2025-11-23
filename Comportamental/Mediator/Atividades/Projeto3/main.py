import threading
import time

class StreamingCentral:

    def __init__(self) -> None:
        self.player = None
        self.legendas = None
        self.qualidade = None
        self.rede_instavel = False

    def set_components(self, player, legendas, qualidade):
        self.player = player
        self.legendas = legendas
        self.qualidade = qualidade

    def receber_evento(self, origem, acao, valor=None):
        if origem == "USUARIO":
            print(f"[Central] Usuario solicitou: {acao} {valor if valor else ''}")

            if acao == "PLAY":
                self.player.executar_comando("REPRODUZINDO")
            
            elif acao == "LEGENDA":
                self.legendas.alterar(valor)

            elif acao == "QUALIDADE":
                if self.rede_instavel and valor == "1080p":
                    print("[Central] NEGADO: Rede instavel. Mantendo qualidade atual.")
                else:
                    self.player.ajustar_resolucao(valor)

        
        elif origem == "QUALIDADE" and acao == "REDE_LENTA":
            print("[Central] ALERTA: Queda de conexao detectada.")
            self.rede_instavel = True
            print("[Central] Solicitando reducao automatica para 360p.")
            self.player.ajustar_resolucao("360p")

class Componente:
    def __init__(self, mediator: StreamingCentral) -> None:
        self.mediator = mediator

class VideoPlayer(Componente):
    def executar_comando(self, estado):
        def callback():
            print(f"[Player] Estado atualizado: {estado}")
        
        t = threading.Timer(1.0, callback)
        t.start()

    def ajustar_resolucao(self, resolucao):
        print(f"[Player] Buffering para troca de qualidade...")
        def callback():
            print(f"[Player] Resolucao definida para: {resolucao}")
        
        t = threading.Timer(1.5, callback)
        t.start()

class GerenciadorLegendas(Componente):
    def alterar(self, idioma):
        def callback():
            print(f"[Legendas] Legenda alterada para: {idioma}")
        
        t = threading.Timer(0.5, callback)
        t.start()

class ControleQualidade(Componente):
    def monitorar_rede(self):
        
        def callback():
            self.mediator.receber_evento("QUALIDADE", "REDE_LENTA")
        
        t = threading.Timer(2.0, callback)
        t.start()

class Usuario(Componente):
    def acao(self, tipo, valor=None):
        self.mediator.receber_evento("USUARIO", tipo, valor)

def main():
    central = StreamingCentral()

    player = VideoPlayer(central)
    legendas = GerenciadorLegendas(central)
    qualidade = ControleQualidade(central)
    usuario = Usuario(central)

    central.set_components(player, legendas, qualidade)

    usuario.acao("PLAY")

    usuario.acao("LEGENDA", "PT-BR")

    qualidade.monitorar_rede()
    
    time.sleep(3.0)
    print("-" * 40)

    usuario.acao("QUALIDADE", "1080p")

if __name__ == "__main__":
    main()
