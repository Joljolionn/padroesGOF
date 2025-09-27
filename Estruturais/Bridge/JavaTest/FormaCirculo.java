public class FormaCirculo extends Forma {

    FormaCirculo(Cor cor) {
        super(cor);
    }

    @Override
    public void desenhar() {
        System.out.println("Desenha um círculo " + this.cor.getCor());
    }

}
