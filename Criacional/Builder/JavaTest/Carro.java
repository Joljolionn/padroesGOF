/* Classe central de definição do Carro */
public class Carro {
    Motor motor;
    Carroceria carroceria;
    Rodas rodas;
    Interior interior;

    // Construtor privado que recebe todos os atributos já instanciados
    // para que o Builder possa criar a classe
    private Carro(Motor motor, Carroceria carroceria, Rodas rodas, Interior interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    // Função para exibir detalhes do carro
    public void mostrarDetalhes() {
        System.out.println("Carro:\nMotor: " + this.motor.tipo + "\nCarroceria: " + this.carroceria.estilo + "\nRodas: "
                + this.rodas.tamanho + "\nInterior: " + this.interior.cor);
    }

    // Classe Builder para criar o objeto parte por parte de forma
    // intuitiva para o cliente
    public static class Builder {
        Motor motor;
        Carroceria carroceria;
        Rodas rodas;
        Interior interior;

        public Builder addMotor(String tipo) {
            this.motor = new Motor(tipo);
            return this;
        }

        public Builder addCarroceria(String estilo) {
            this.carroceria = new Carroceria(estilo);
            return this;
        }

        public Builder addRodas(String tamanho) {
            this.rodas = new Rodas(tamanho);
            return this;
        }

        public Builder addInterior(String cor) {
            this.interior = new Interior(cor);
            return this;
        }

        public Carro build() {
            return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
        }
    }
}
