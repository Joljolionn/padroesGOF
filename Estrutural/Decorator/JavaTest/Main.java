public class Main {

    public static void main(String[] args) {
        ComponenteNotificador notificador = new ComponenteNotificador();
        DecoradorNotificador notificadorSMS = new NotificadorSMS(notificador);
        DecoradorNotificador notificadorEmail = new NotificadorEmail(notificadorSMS);
        DecoradorNotificador notificadorWhatsapp = new NotificadorWhatsapp(notificadorEmail);

        notificadorWhatsapp.enviar("Pedido do Habib's saindo...");
    }
}
