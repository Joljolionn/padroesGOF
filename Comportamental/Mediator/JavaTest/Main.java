public class Main {

    public static void main(String[] args) {
        TorreDeControle torre = new TorreDeControle();
        Aviao aviao = new Aviao("PT-AVA");
        Helicoptero helicoptero = new Helicoptero("PT=HEL");
        Ultraleve ultraleve = new Ultraleve("PT-ULI");

        torre.registrar(aviao);
        torre.registrar(helicoptero);
        torre.registrar(ultraleve);

        aviao.solicitarPouso();
        helicoptero.solicitarDecolagem();
        ultraleve.declararEmergencia("Falha Elétrica");
    }
}
