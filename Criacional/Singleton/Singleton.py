class ConexaoBanco:
    
    _instance = None 

    def __new__(cls, *args, **kwargs):
        """
        Método mágico chamado antes de __init__. 
        Controla a criação da instância.
        """
        # 1. Verifica se a instância única existe.
        if cls._instance is None:
            # 2. Se não existe, chama o método __new__ da classe base (object)
            # para criar e alocar o novo objeto.
            cls._instance = super(ConexaoBanco, cls).__new__(cls)
        
        # 3. Retorna a instância única (existente ou recém-criada).
        return cls._instance

    def __init__(self) -> None:
        """
        Inicializa a instância. O bloco __init__ só é executado na PRIMEIRA 
        criação (pois a instância é sempre retornada no __new__).
        """
        # Verifica se o objeto já foi inicializado (para evitar re-inicialização)
        if not hasattr(self, '_initialized'):
            self.settings = {
                "banco": "PostgreSQL", 
                "usuario": "Nety", 
                "senha": "Luzinete"
            }
            # Sinaliza que a inicialização foi concluída.
            self._initialized = True
            print("[LOG] Instância de Conexão Única inicializada.")
    
    def get_setting(self, key):
        return self.settings[key]

    def set_setting(self, key, value):
        self.settings[key] = value
        print(f"Alteração: configuração atualizada: {key}: {value}")

    def get_instance(self):
        if self._instance is None:
            self._instance = ConexaoBanco()
        return self._instance

print("Primeiro passo, instaciar a classe")

CONFIG = ConexaoBanco()

print(f"Dados da conexão: \nBanco: {CONFIG.get_setting('banco')}, \nUsuário: {CONFIG.get_setting('usuario')}, \nSenha: {CONFIG.get_setting('senha')}")

print("Segundo passo, alterar a instacia da classe")

CONFIG.set_setting('usuario', 'Silvia')

print(f"Dados da conexão: \nBanco: {CONFIG.get_setting('banco')}, \nUsuário: {CONFIG.get_setting('usuario')}, \nSenha: {CONFIG.get_setting('senha')}")

print("Terceiro passo, garantir que apenas uma instancia é criada")

CONFIG2 = ConexaoBanco()

CONFIG3 = ConexaoBanco().get_instance()

print(f"Instancia 1 é igual a instância 2? {CONFIG is CONFIG2}")
print(f"Instancia 2 é igual a instância 3? {CONFIG2 is CONFIG3}")
print(f"Instancia 1 é igual a instância 3? {CONFIG is CONFIG3}")
