public class EtapaConexao extends EtapaProcesso {

	@Override
	public void processar(Pagamento pagamento) {
        System.out.println(">>>> Estabelecendo conexão...");
        if (true){
            System.out.println("[OK] Conexão Estabelecida");
            if(super.proximaEtapa != null){
                super.proximaEtapa.processar(pagamento);
            }
        } else {
            System.out.println("[**] Informações Invalidas - Processamento Encerrado...");
        }
	}
    
    
}
