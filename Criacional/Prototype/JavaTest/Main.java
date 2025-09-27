public class Main {

    public static void main(String[] args) {
        PessoaManager pessoaManager = new PessoaManager();

        pessoaManager.addPessoa(1, "Silvia Gonçalo", 19);
        pessoaManager.addPessoa(2, "Luzinete Sousa", 19);
        pessoaManager.addPessoa(3, "Livia Lazarini", 23);

        // clonando 1 pessoa e modificando
        Pessoa pessoaClonada = pessoaManager.getPessoaById(1);
        if (pessoaClonada != null) {
            pessoaClonada.nome = "Silvia Lazarini";
        }

        // clonando uma pessoa e multiplicando
        Pessoa pessoaClonada2 = pessoaManager.getPessoaById(2);
        if (pessoaClonada2 != null) {
            pessoaClonada2.nome = "Luzinete Lazarinie";
        }

        System.out.println("Pessoa Original - 1");
        System.out.println(pessoaManager.getPessoaById(1));

        System.out.println("Pessoa Clonada - 1");
        System.out.println(pessoaClonada);

        System.out.println("Pessoa Original - 2");
        System.out.println(pessoaManager.getPessoaById(2));

        System.out.println("Pessoa Clonada - 2");
        System.out.println(pessoaClonada2);
    }
}
