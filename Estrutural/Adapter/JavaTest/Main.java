public class Main {

    public static void main(String[] args) {
        Adaptee adaptee = new Adaptee();
        Adapter adapter = new Adapter(adaptee);
        Cliente cliente = new Cliente(adapter);

        cliente.criarRequest();
    }
}
