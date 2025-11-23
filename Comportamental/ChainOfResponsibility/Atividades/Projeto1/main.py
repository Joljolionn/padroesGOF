from typing import Self

class Log:
    def __init__(self, nivel: str, mensagem: str) -> None:
        self.nivel = nivel
        self.mensagem = mensagem

class Logger:
    def __init__(self):
        self.proximo = None

    def set_proximo(self, proximo):
        self.proximo = proximo

    def processar(self, log: Log):
        raise NotImplementedError("Esse método deve ser implementado pelas subclasses")

class LoggerConsole(Logger):
    def processar(self, log: Log):
        if log.nivel == "INFO":
            print("LoggerConsole - Enviando mensagem para o console...")
            print(f"[{log.nivel}] {log.mensagem}")
        if self.proximo is not None:
            self.proximo.processar(log)

class LoggerArquivo(Logger):
    def processar(self, log: Log):
        if log.nivel == "INFO" or log.nivel == "WARNING":
            print("LoggerArquivo - Inserindo mensagem no arquivo de logs...")
            print(f"[{log.nivel}] {log.mensagem}")
        if self.proximo is not None:
            self.proximo.processar(log)

class LoggerEmail(Logger):
    def processar(self, log: Log):
        if log.nivel == "ERROR":
            print("LoggerEmail - Enviando mensagem via email...")
            print(f"[{log.nivel}] {log.mensagem}")
        if self.proximo is not None:
            self.proximo.processar(log)

def main():
    logger_console = LoggerConsole()
    logger_arquivo = LoggerArquivo()
    logger_email = LoggerEmail()

    logger_console.set_proximo(logger_arquivo)
    logger_arquivo.set_proximo(logger_email)

    logger_console.processar(Log("INFO", "Sistema no ar"))
    logger_console.processar(Log("WARNING", "Sistema com tráfego alto"))
    logger_console.processar(Log("ERROR", "Sistema caiu"))
    logger_console.processar(Log("INFO", "Sistema no ar novamente"))

if __name__ == "__main__":
    main()
