import java.util.ArrayList;

public class ColecaoDeNomes {

    private ArrayList<String> nomes;

    ColecaoDeNomes(){
        this.nomes = new ArrayList<String>();
    }

    public void adicionar(String nomes){
        this.nomes.add(nomes);
    }

    public Iterador<String> criarIterador(){
        return new IteradorDeNomes(this.nomes.toArray(new String[0]));
    }

}
