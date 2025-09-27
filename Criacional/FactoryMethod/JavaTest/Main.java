public class Main {

    public static void main(String[] args) {
        // USO DO PADRAO DO PROJETO - FABRICA:
        FabricaDeVeiculo fabricaDeCarro = new FabricaDeCarro();
        FabricaDeVeiculo fabricaDeMoto = new FabricaDeMoto();
        FabricaDeVeiculo fabricaDeCaminhao = new FabricaDeCaminhao();

        Veiculo carro1 = fabricaDeCarro.criarVeiculo("Sedan");
        Veiculo carro2 = fabricaDeCarro.criarVeiculo("Esportivo");
        Veiculo moto1 = fabricaDeMoto.criarVeiculo("Yamanha-660");
        Veiculo moto2 = fabricaDeMoto.criarVeiculo("Honda-CG160");
        Veiculo caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania");
        Veiculo caminhao2 = fabricaDeCaminhao.criarVeiculo("VW-Cargo");

        carro1.mostrarDetalhes();
        carro2.mostrarDetalhes();
        moto1.mostrarDetalhes();
        moto2.mostrarDetalhes();
        caminhao1.mostrarDetalhes();
        caminhao2.mostrarDetalhes();
    }
}
