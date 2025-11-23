public class Aeronave { 
    private String prefixo;
    private String tipo;
    private TorreDeControle mediator;

    Aeronave(String prefixo, String tipo){
        this.prefixo = prefixo;
        this.tipo = tipo;
        this.mediator = null;
    }

    public String identificacao(){
        return this.tipo+ " - " + this.prefixo; 
    }

    private void solicitar(String tipo, DadosEmergencia dados){
        if(this.mediator != null) {
            this.mediator.notificar(new Evento(this, tipo, dados));
        } else {
            System.out.println("Mediator não definido para a aeronave.");
        }
    }

    public void solicitarPouso(){
        this.solicitar("pouso", null);
    }

    public void solicitarDecolagem(){
        this.solicitar("decolagem", null);
    }
    public void declararEmergencia(String motivo){
        this.solicitar("emergencia", new DadosEmergencia(true, motivo));
    }
    public String getPrefixo() {
		return prefixo;
	}

	public void setPrefixo(String prefixo) {
		this.prefixo = prefixo;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public TorreDeControle getMediator() {
		return mediator;
	}

	public void setMediator(TorreDeControle mediator) {
		this.mediator = mediator;
	}
   
}
