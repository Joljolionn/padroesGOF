public class IteradorDeNomes implements Iterador<String>{

    private String[] nomes;
    private Integer indice;

    public IteradorDeNomes(String[] nomes){
        this.nomes = nomes;
        this.indice = 0;
    }

	@Override
	public Boolean temProximo() {
        return this.indice < this.nomes.length;
	}

	@Override
	public String proximo() {
        return this.nomes[indice++];
	}
    
}
