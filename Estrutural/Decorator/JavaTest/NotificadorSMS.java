public class NotificadorSMS extends DecoradorNotificador {

    NotificadorSMS(Notificador notificador) {
        super(notificador);
    }

    @Override
    public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando mensagem por SMS: " + msg);
    }

}
