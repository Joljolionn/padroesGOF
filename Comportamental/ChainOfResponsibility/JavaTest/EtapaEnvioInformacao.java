public class EtapaEnvioInformacao extends EtapaProcesso {

    @Override
    public void processar(Pagamento pagamento) {
        System.out.println(">>>> Enviando informações de Pagamento...");
        System.out.println("[OK] Informações Enviadas com Sucesso...");
        if (super.proximaEtapa != null) {
            super.proximaEtapa.processar(pagamento);
        }
    }

}
