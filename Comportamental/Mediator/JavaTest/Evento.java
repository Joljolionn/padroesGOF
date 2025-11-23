public class Evento {

   Aeronave remetente;
   String tipo;
   DadosEmergencia dados;

   Evento(Aeronave remetente, String tipo, DadosEmergencia dados){
        this.remetente = remetente;
        this.tipo = tipo;
        this.dados = dados;
   }

   public Aeronave getRemetente() {
	return remetente;
   }

   public void setRemetente(Aeronave remetente) {
	this.remetente = remetente;
   }

   public String getTipo() {
	return tipo;
   }

   public void setTipo(String tipo) {
	this.tipo = tipo;
   }

   public DadosEmergencia getDados() {
	return dados;
   }

   public void setDados(DadosEmergencia dados) {
	this.dados = dados;
   }
}
