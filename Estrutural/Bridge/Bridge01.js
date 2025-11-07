// 1 - Implementação da Interface de Cor
class Cor{
    constructor(cor){
        this.cor = cor;
    }

    getCor(){
        return this.cor;
    }
}

// 2 - Implementação Concreta de Cores
class CorVermelha extends Cor{
    constructor(){
        super("Vermelho");
    }
}

class CorVerde extends Cor{
    constructor(){
        super("Verde");
    }
}

class CorAzul extends Cor{
    constructor(){
        super("Azul");
    }
}

// 2.1 - Implementação da Interface de Forma
class Forma{
    constructor(cor){
        this.cor = cor;
    }
    
    desenhar(){
        throw new Error("Esse Método precisa ser implemntado pela subclasse");
    }
}

// 2.2 - Abstração Refinada:
class Circulo extends Forma{
    desenhar(){
        console.log(`Desenhar um Circulo ${this.cor.getCor()}`);
    }
}

class Quadrado extends Forma{
    desenhar(){
        console.log(`Desenhar um Quadrado ${this.cor.getCor()}`);
    }
}
class Triangulo extends Forma{
    desenhar(){
        console.log(`Desenhar um Triangulo ${this.cor.getCor()}`);
    }
}

// 3 - Utilização - Cliente
const vermelho = new CorVermelha();
const verde = new CorVerde();
const azul = new CorAzul();

const circulo01 = new Circulo(vermelho);
const circulo02 = new Circulo(verde);
const circulo03 = new Circulo(azul);
const quadrado01 = new Quadrado(azul);
const quadrado02 = new Quadrado(vermelho);
const triangulo01 = new Triangulo(verde);

circulo01.desenhar();
circulo02.desenhar();
circulo03.desenhar();
quadrado01.desenhar();
quadrado02.desenhar();
triangulo01.desenhar();