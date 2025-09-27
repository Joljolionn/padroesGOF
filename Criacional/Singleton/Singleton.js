// PRIMEIRA ETAPA - CLASSE A SER INSTANCIADA UNICAMENTE
class ConexaoBanco {
	// Instância estática da classe
	static instance = null;

	// Construtor bloqueado de instanciar a classe mais de uma vez
	constructor() {
		if (ConexaoBanco.instance) {
			return ConexaoBanco.instance;
		}

		// Caso não haja instância, cria uma nova instância e armazena-a
		this.settings = {
			banco: "PostgreSQL",
			usuario: "Nety",
			senha: "Luzinete",
		};

        ConexaoBanco.instance = this;
	}

	// Método para ler chave da instância
	getSetting(key) {
		return this.settings[key];
	}

	// Método para atualizar um valor da instância
	setSetting(key, value) {
		this.settings[key] = value;
		console.log(`Alteração: configuração atualizada: ${key}: ${value}`);
	}

	// Método para retornar a instância única
	static getInstance() {
		if (!this.instance) {
			this.instance = new ConexaoBanco();
		}
		return this.instance;
	}
}

// TESTE DA IMPLEMENTAÇÃO

console.log(`Primeiro passo, instaciar a classe`)
const config = new ConexaoBanco();
console.log(`Dados da conexão: \nBanco: ${config.getSetting('banco')}, \nUsuário: ${config.getSetting('usuario')}, \nSenha: ${config.getSetting('senha')}`)

console.log(`Segundo passo, alterar a instacia da classe`)

config.setSetting('usuario', 'Silvia')
console.log(`Dados da conexão: \nBanco: ${config.getSetting('banco')}, \nUsuário: ${config.getSetting('usuario')}, \nSenha: ${config.getSetting('senha')}`)

console.log(`Terceiro passo, garantir que apenas uma instancia é criada`)

const config2 = new ConexaoBanco();

const config3 = ConexaoBanco.getInstance()

console.log(`Instancia 1 é igual a instância 2? ${config === config2}`)
console.log(`Instancia 2 é igual a instância 3? ${config2 === config3}`)
console.log(`Instancia 1 é igual a instância 3? ${config === config3}`)
