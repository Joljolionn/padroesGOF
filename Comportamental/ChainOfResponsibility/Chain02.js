// 1. Classe Base:
class EtapaProcesso{
    constructor(){
        this.proximaEtapa = null;
    }
 
    setProximaEtapa(proximaEtapa){
        this.proximaEtapa = proximaEtapa;
    }
 
    processar(pagamento){
        throw new Error("Esse método deve ser implementado pelas subclasses");
    }
}
 
// 2. Etapas Concretas:
class EtapaConexao extends EtapaProcesso{
    processar(pagamento){
        console.log(">>>> Estabelecendo conexão...");
        if(true){
            console.log("[OK] Conexão Estabelecida");
            if(this.proximaEtapa){
                this.proximaEtapa.processar(pagamento);
            }
        }else{
            console.log("[**] Falha na Conexão - Processamento Encerrado..");
        }
    }
}
 
class EtapaValidacao extends EtapaProcesso{
    processar(pagamento){
        console.log(">>>> Validando Informações de Pagamento...");
        if(pagamento.valor > 0){
            console.log("[OK] Informações do Pagamento Validado com sucesso...");
            if(this.proximaEtapa){
                this.proximaEtapa.processar(pagamento);
            }
        }else{
            console.log("[**] Informações Invalidas - Processamento Encerrado...");
        }
    }
}
 
class EtapaEnvioInformacao extends EtapaProcesso{
    processar(pagamento){
        console.log(">>>> Enviando informações de Pagamento...");
        console.log("[OK] Informações Enviadas com Sucesso...");
        if(this.proximaEtapa){
            this.proximaEtapa.processar(pagamento);
        }
    }
}
 
class EtapaAutenticacao extends EtapaProcesso{
    processar(pagamento){
        console.log(">>>> Autenticando Pagamento...");
        if(true){
            console.log("[OK] Pagamento Autenticado com Sucesso...");
            if(this.proximaEtapa){
                this.proximaEtapa.processar(pagamento);
            }
        }else{
            console.log("[**] Autenticação Falhou - Processo Encerrado...");
        }
    }
}
 
class EtapaConfirmacao extends EtapaProcesso{
    processar(pagamento){
        console.log(">>>> Confirmando Pagamento...")
        console.log("[OK] Pagamento Confirmado com Sucesso...");
    }
}
 
// 2.2 Objeto Pagamento
class Pagamento{
    constructor(valor){
        this.valor = valor;
        // Poderia ter outros dados relevantes
    }
}
 
// 3. Cliente - Uso do Padrão
class Cliente{
    iniciarProcessoPagamento(valor){
        // Criação das Etapas:
        const etapaConexao = new EtapaConexao();
        const etapaValidacao = new EtapaValidacao();
        const etapaEnvioInformacao = new EtapaEnvioInformacao();
        const etapaAutenticacao = new EtapaAutenticacao();
        const etapaConfirmacao = new EtapaConfirmacao();
 
        // Configuração da Cadeia:
        etapaConexao.setProximaEtapa(etapaValidacao);
        etapaValidacao.setProximaEtapa(etapaEnvioInformacao);
        etapaEnvioInformacao.setProximaEtapa(etapaAutenticacao);
        etapaAutenticacao.setProximaEtapa(etapaConfirmacao);
 
        // Criação do Pagamento
        const pagamento = new Pagamento(valor);
 
        // Inicio do Processo
        etapaConexao.processar(pagamento);
    }
}
 
// Usando o Padrão:
const cliente = new Cliente();
cliente.iniciarProcessoPagamento(1000.00);
