import java.util.ArrayList;

public class Conteiner extends Componente{

    public ArrayList<Componente> componentes;

	Conteiner(String nome) {
		super(nome);
        this.componentes = new ArrayList<Componente>();
	}

    public void adicionar(Componente componente) {
        this.componentes.add(componente);
    }

    public void remover(Componente componente) {
        this.componentes.remove(componente);
    }

    @Override
    public Double obterPreco(){
        Double preco = 0.0;

        for (Componente componente : componentes) {
            preco += componente.obterPreco();
        }

        return preco;
    }

    
}
