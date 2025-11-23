public class ClienteChain {

    public void iniciarProcessoPagamento(Double valor){
        EtapaConexao etapaConexao = new EtapaConexao();
        EtapaValidacao etapaValidacao = new EtapaValidacao();
        EtapaEnvioInformacao etapaEnvioInformacao = new EtapaEnvioInformacao();
        EtapaAutenticacao etapaAutenticacao = new EtapaAutenticacao();
        EtapaConfirmacao etapaConfirmacao = new EtapaConfirmacao();

        etapaConexao.setProximaEtapa(etapaValidacao);
        etapaValidacao.setProximaEtapa(etapaEnvioInformacao);
        etapaEnvioInformacao.setProximaEtapa(etapaAutenticacao);
        etapaAutenticacao.setProximaEtapa(etapaConfirmacao);

        Pagamento pagamento = new Pagamento(valor);

        etapaConexao.processar(pagamento);
    }
}
