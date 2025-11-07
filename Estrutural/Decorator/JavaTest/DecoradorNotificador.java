public abstract class DecoradorNotificador implements Notificador {

    private Notificador notificador;

    DecoradorNotificador(Notificador notificador) {
        this.notificador = notificador;
    }

    @Override
    public void enviar(String msg) {
        this.notificador.enviar(msg);
    }
}
