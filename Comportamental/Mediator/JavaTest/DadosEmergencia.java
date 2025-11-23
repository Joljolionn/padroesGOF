public class DadosEmergencia {

    private Boolean emergencia;
    private String motivo;

    public DadosEmergencia(Boolean emergencia, String motivo){
        this.emergencia = emergencia;
        this.motivo = motivo;
    }

	public Boolean getEmergencia() {
		return emergencia;
	}
	public void setEmergencia(Boolean emergencia) {
		this.emergencia = emergencia;
	}
	public String getMotivo() {
		return motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}
}
