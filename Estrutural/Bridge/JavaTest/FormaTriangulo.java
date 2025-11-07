public class FormaTriangulo extends Forma {

    FormaTriangulo(Cor cor) {
        super(cor);
    }

    @Override
    public void desenhar() {
        System.out.println("Desenha um triangulo " + this.cor.getCor());
    }

}
