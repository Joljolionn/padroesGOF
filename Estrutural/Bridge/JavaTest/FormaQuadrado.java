public class FormaQuadrado extends Forma {

    FormaQuadrado(Cor cor) {
        super(cor);
    }

    @Override
    public void desenhar() {
        System.out.println("Desenha um quadrado " + this.cor.getCor());
    }

}
