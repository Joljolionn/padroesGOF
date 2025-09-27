import java.util.HashMap;

public class ConexaoBanco {

    private static ConexaoBanco instance = null;
    public HashMap<String, String> settings = new HashMap<String, String>();
    public String banco;
    public String usuario;
    public String senha;

    private ConexaoBanco(){
        System.out.println("LOG: Instância única inicializada!");
        settings.put("banco", "PostgreSQL");
        settings.put("usuario", "Nety");
        settings.put("senha", "Luzinete");
    }

    public String getSetting(String key){
        return settings.get(key);
    }

    public void setSetting(String key, String value){
        this.settings.put(key, value);
        System.out.println("Alteração: configuração atualizada: "+ key + ": "+ value);
    }

    public static ConexaoBanco getInstance() {
        if (ConexaoBanco.instance == null) {
            ConexaoBanco.instance = new ConexaoBanco();
        }

        return ConexaoBanco.instance;
    }
}
