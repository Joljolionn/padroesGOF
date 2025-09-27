abstract public class Veiculo {
    private String modelo;

    protected Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes(){
        System.out.println("Modelo: " + this.modelo);
    }

}
