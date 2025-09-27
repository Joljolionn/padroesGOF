import java.util.HashMap;

public class PessoaManager {

    public HashMap<Integer, Pessoa> pessoas = new HashMap<Integer, Pessoa>();

    public void addPessoa(int id, String nome, int idade){
        this.pessoas.put(id, new Pessoa(id, nome, idade));
    }

    public Pessoa getPessoaById(int id){
        Pessoa pessoaOriginal = null;

        pessoaOriginal = pessoas.get(id).clone();
        
        return pessoaOriginal;
    }
}
