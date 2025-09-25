// Classe principal para testar implementação
public class Main {

    public static void main(String[] args) {
        // Criação de uma instância de carro parte por parte utilizando os
        // métodos definidos pelo Builder
        Carro carroEsportivo = new Carro.Builder()
                .addMotor("V8")
                .addCarroceria("Esportivo")
                .addRodas("18")
                .addInterior("Preta")
                .build();

        // Exibindo os detalhes do carro criado
        carroEsportivo.mostrarDetalhes();
    }
}
