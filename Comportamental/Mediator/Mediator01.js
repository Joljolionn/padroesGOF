// Mediado - Torre de Controle
class TorreDeControle {
  constructor() {
    this.aeronaves = new Set();
    this.pistaLivre = true;
    this.fila = [];
  }
 
  registrar(aeronave) {
    aeronave.definirMediator(this);
    this.aeronaves.add(aeronave);
  }
 
  notificar(remetente, tipo, dados = {}) {
    if (!remetente.mediator) {
      console.error("Aeronave não registrada com o Mediator.");
      return;
    }
 
    const prioridade = dados.emergencia ? 0 : 1;
    const evento = { remetente, tipo, dados, prioridade };
 
    // Caso for Emergencia vai pro Início:
    if (prioridade === 0) {
      this.fila.unshift(evento);
    } else {
      this.fila.push(evento);
    }
 
    this.processar();
  }
 
  processar() {
    if (!this.pistaLivre || this.fila.length === 0) {
      return;
    }
 
    const { remetente, tipo, dados } = this.fila.shift();
    this.pistaLivre = false; // Ocupa Pista
 
    if (tipo === "pouso") {
      this.pouso(remetente);
    } else if (tipo === "decolagem") {
      this.decolagem(remetente);
    } else if (tipo === "emergencia") {
      this.emergencia(remetente, dados);
    }
  }
 
  pouso(aeronave) {
    console.log(`[OK] Pouso Autorizado: ${aeronave.identificacao()}`);
    console.log("-".repeat(50));
    setTimeout(() => {
      console.log(`[END] Pousou: ${aeronave.identificacao()}`);
      console.log("-".repeat(50));
      this.pistaLivre = true;
      this.avisarOutros(aeronave, "pousou");
      this.processar();
    }, 1500);
  }
 
  decolagem(aeronave) {
    console.log(`[OK] Decolagem Autorizada: ${aeronave.identificacao()}`);
    console.log("-".repeat(50));
    setTimeout(() => {
      console.log(`[END] Decolou: ${aeronave.identificacao()}`);
      console.log("-".repeat(50));
      this.pistaLivre = true;
      this.avisarOutros(aeronave, "Decolou");
      this.processar();
    }, 1500);
  }
 
  emergencia(aeronave, dados) {
    console.log(
      `[OK] EMERGENCIA: ${aeronave.identificacao()} - ${dados.motivo}`
    );
    console.log("-".repeat(50));
    setTimeout(() => {
      console.log(`[END] Emergência Atendida: ${aeronave.identificacao()}`);
      console.log("-".repeat(50));
      this.pistaLivre = true;
      this.avisarOutros(aeronave, "Emergência Atendida");
      this.processar();
    }, 1500);
  }
 
  avisarOutros(remetente, msg) {
    for (const a of this.aeronaves) {
      if (a !== remetente) {
        console.log(`[AVISO] ${a.identificacao()} -> ${msg}`);
        console.log("-".repeat(50));
      }
    }
  }
}
 
// 2. AERONAVE - COMPONENTE BASE:
class Aeronave {
  constructor(prefixo, tipo) {
    this.prefixo = prefixo;
    this.tipo = tipo;
    this.mediator = null;
  }
 
  definirMediator(m) {
    this.mediator = m;
  }
 
  identificacao() {
    return `${this.tipo} - ${this.prefixo}`;
  }
 
  solicitar(tipo, dados = {}) {
    if (this.mediator) {
      this.mediator.notificar(this, tipo, dados);
    } else {
      console.error("Mediator não definido para a aeronave.");
    }
  }
 
  solicitarPouso() {
    this.solicitar("pouso");
  }
 
  solicitarDecolagem() {
    this.solicitar("decolagem");
  }
 
  declararEmergencia(motivo) {
    this.solicitar("emergencia", { emergencia: true, motivo });
  }
}
 
// 3. AERONAVES - ESPECIALIZAÇÃO:
class Aviao extends Aeronave {
  constructor(p) {
    super(p, "Avião");
  }
}
 
class Helicoptero extends Aeronave {
  constructor(p) {
    super(p, "Helicoptero");
  }
}
 
class Ultraleve extends Aeronave {
  constructor(p) {
    super(p, "Ultraleve");
  }
}
 
// 4. USO DO PADRÃO - FUNCIONAMENTO:
(function operacao() {
  const torre = new TorreDeControle();
  const aviao = new Aviao("PT-AVA");
  const helicoptero = new Helicoptero("PT-HEL");
  const ultraleve = new Ultraleve("PT-ULI");
 
  torre.registrar(aviao);
  torre.registrar(helicoptero);
  torre.registrar(ultraleve);
 
  aviao.solicitarPouso(); // Fila Normal
  helicoptero.solicitarDecolagem(); // Fila Normal
  ultraleve.declararEmergencia("Falha Elétrica"); // Prioridade Máxima
})();
