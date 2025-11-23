public abstract class EtapaProcesso {

    public EtapaProcesso proximaEtapa;

    EtapaProcesso(){
        this.proximaEtapa = null;
    }

	public void setProximaEtapa(EtapaProcesso proximaEtapa) {
		this.proximaEtapa = proximaEtapa;
	}

    public abstract void processar(Pagamento pagamento);
    
}
