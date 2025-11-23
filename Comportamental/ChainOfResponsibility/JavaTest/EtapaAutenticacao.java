public class EtapaAutenticacao extends EtapaProcesso {

    @Override
    public void processar(Pagamento pagamento) {
        System.out.println(">>>> Autenticando Pagamento...");
        if (true) {
            System.out.println("[OK] Pagamento Autenticado com Sucesso...");

            if (super.proximaEtapa != null) {
                super.proximaEtapa.processar(pagamento);
            }
        } else {
            System.out.println("[**] Autenticação Falhou - Processo Encerrado...");
        }
    }

}
