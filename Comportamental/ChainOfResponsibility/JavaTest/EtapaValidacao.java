public class EtapaValidacao extends EtapaProcesso {

    @Override
    public void processar(Pagamento pagamento) {
        System.out.println(">>> Validando Informações de Pagamento...");
        if (pagamento.valor > 0) {
            System.out.println("[OK] Informações do Pagamento Validadas com sucesso...");
            if (super.proximaEtapa != null) {
                super.proximaEtapa.processar(pagamento);
            }
        } else {
            System.out.println("[**] Informações Invalidas - Processamento Encerrado...");
        }
    }

}
