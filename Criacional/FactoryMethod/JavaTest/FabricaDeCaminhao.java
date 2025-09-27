public class FabricaDeCaminhao implements FabricaDeVeiculo {

    @Override
    public Veiculo criarVeiculo(String modelo) {
        return new Caminhao(modelo);
    }

}
