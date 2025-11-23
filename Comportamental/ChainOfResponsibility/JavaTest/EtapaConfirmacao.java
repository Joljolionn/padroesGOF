public class EtapaConfirmacao extends EtapaProcesso {

    @Override
    public void processar(Pagamento pagamento) {
        System.out.println(">>> Configrmando Pagamento...");
        System.out.println("[OK] Pagamento Confirmado com Sucesso");
    }

}
