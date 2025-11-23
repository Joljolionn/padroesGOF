class EtapaProcesso():
    def __init__(self) -> None:
        self.proxima_etapa = None
    
    def set_proxima_etapa(self, proxima_etapa):
        self.proxima_etapa = proxima_etapa

    def processar(self, pagamento):
        raise NotImplementedError()

class EtapaConexao(EtapaProcesso):
    def processar(self, pagamento):
        print(">>>> Estabelecendo conexão...")
        if True:
            print("[OK] Conexão Estabelecida")
            if self.proxima_etapa is not None:
                self.proxima_etapa.processar(pagamento)
        else:
            print("[**] Falha na conexão = Processamento Encerrado...")

class EtapaValidacao(EtapaProcesso):
    def processar(self, pagamento):
        print(">>>> Validando Informações de Pagamento...")
        if pagamento.valor > 0:
            print("[OK] Informações do Pagamento Validado com sucesso...")
            if self.proxima_etapa is not None:
                self.proxima_etapa.processar(pagamento)
        else:
            print("[**] Informações Invalidas - Processamento Encerrado...")

class EtapaEnvioInformacao(EtapaProcesso):
    def processar(self, pagamento):
        print(">>>> Enviando informações de Pagamento...")
        print("[OK] Informações Enviadas com Sucesso...")
        if self.proxima_etapa is not None:
            self.proxima_etapa.processar(pagamento)

class EtapaAutenticacao(EtapaProcesso):
    def processar(self, pagamento):
        print(">>>> Autenticando Pagamento...")
        if True:
            print("[OK] Pagamento Autenticado com Sucesso...")
            if self.proxima_etapa is not None:
                self.proxima_etapa.processar(pagamento)
        else:
            print("[**] Autenticação Falhou - Processo Encerrado...")

class EtapaConfirmacao(EtapaProcesso):
    def processar(self, pagamento):
        print(">>>> Confirmando Pagamento...")
        print("[OK] Pagamento Confirmado com Sucesso...")

class Pagamento():
    def __init__(self, valor) -> None:
        self.valor = valor

class Cliente():
    def iniciar_processo_pagamento(self, valor):
        etapa_conexao = EtapaConexao()
        etapa_validacao = EtapaValidacao()
        etapa_envio_informacao = EtapaEnvioInformacao()
        etapa_autenticacao = EtapaAutenticacao()
        etapa_confirmacao = EtapaConfirmacao()

        etapa_conexao.set_proxima_etapa(etapa_validacao)
        etapa_validacao.set_proxima_etapa(etapa_envio_informacao)
        etapa_envio_informacao.set_proxima_etapa(etapa_autenticacao)
        etapa_autenticacao.set_proxima_etapa(etapa_confirmacao)

        pagamento = Pagamento(valor)

        etapa_conexao.processar(pagamento)

cliente = Cliente()
cliente.iniciar_processo_pagamento(10000)
