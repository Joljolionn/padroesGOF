public class FabricaDeMoto implements FabricaDeVeiculo {

    @Override
    public Veiculo criarVeiculo(String modelo) {
        return new Moto(modelo);
    }

}
