class ComponenteNotificador:
    def enviar(self, msg):
        print(f'Enviando msg: {msg}')

class DecoradorNotificador:
    def __init__(self, componente: ComponenteNotificador):
        self.componente = componente

    def enviar(self, msg):
        self.componente.enviar(msg)

class NotificadorSMS(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por SMS: {msg}')

class NotificadorWhatsapp(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por whatsapp: {msg}')

class NotificadorEmail(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f'Enviando Msg por Email: {msg}')

notificador = ComponenteNotificador()
notificadorSMS = NotificadorSMS(notificador)
notificadorWhatsapp = NotificadorWhatsapp(notificadorSMS)
notificadorWhatsapp.enviar("Pedido do Habbib's saindo...")