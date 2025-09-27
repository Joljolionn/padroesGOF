public class Main {

    public static void main(String[] args) {

        System.out.println("Primeiro passo, instaciar a classe");
        ConexaoBanco config = ConexaoBanco.getInstance();
        System.out.println(
                "Dados da conexão: \nBanco: " + config.getSetting("banco") + "\nUsuário: "
                        + config.getSetting("usuario") + "\nSenha: " + config.getSetting("senha"));

        System.out.println("Segundo passo, alterar a instacia da classe");

        config.setSetting("usuario", "Silvia");
        System.out.println(
                "Dados da conexão: \nBanco: " + config.getSetting("banco") + "\nUsuário: "
                        + config.getSetting("usuario") + "\nSenha: " + config.getSetting("senha"));

        System.out.println("Terceiro passo, garantir que apenas uma instancia é criada");

        ConexaoBanco config2 = ConexaoBanco.getInstance();

        ConexaoBanco config3 = ConexaoBanco.getInstance();

        System.out.println("Instancia 1 é igual a instância 2? ");
        System.out.println(config == config2);
        System.out.println("Instancia 2 é igual a instância 3? ");
        System.out.println(config2 == config3);
        System.out.println("Instancia 1 é igual a instância 3? ");
        System.out.println(config == config3);
    }
}
