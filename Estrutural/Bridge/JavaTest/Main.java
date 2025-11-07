public class Main {

    public static void main(String[] args) {
        Cor vermelho = new CorVermelha();
        Cor verde = new CorVerde();
        Cor azul = new CorAzul();

        Forma circulo01 = new FormaCirculo(vermelho);
        Forma circulo02 = new FormaCirculo(verde);
        Forma circulo03 = new FormaCirculo(azul);
        Forma quadrado01 = new FormaQuadrado(azul);
        Forma quadrado02 = new FormaQuadrado(vermelho);
        Forma triangulo01 = new FormaTriangulo(verde);

        circulo01.desenhar();
        circulo02.desenhar();
        circulo03.desenhar();
        quadrado01.desenhar();
        quadrado02.desenhar();
        triangulo01.desenhar();
    }
}
