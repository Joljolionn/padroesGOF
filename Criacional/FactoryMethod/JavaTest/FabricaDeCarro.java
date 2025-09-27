public class FabricaDeCarro implements FabricaDeVeiculo {

    @Override
    public Veiculo criarVeiculo(String modelo) {
        return new Carro(modelo);
    }

}
