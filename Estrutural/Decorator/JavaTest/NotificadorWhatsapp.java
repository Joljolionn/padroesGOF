public class NotificadorWhatsapp extends DecoradorNotificador{

	NotificadorWhatsapp(Notificador notificador) {
		super(notificador);
	}

	@Override
	public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando mensagem por Whatsapp: " + msg);
	}

    
}
