public class NotificadorEmail extends DecoradorNotificador{
  
    NotificadorEmail(Notificador notificador){
        super(notificador);
    }

	@Override
	public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando mensagem por email: " + msg);

	}

    
}
