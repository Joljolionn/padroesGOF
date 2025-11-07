// --- Flyweight ---
class DisciplinaFlyweight {
    constructor(nome) {
        this.nome = nome;
    }
 
    // Método que recebe o estado extrínseco (contexto) para realizar uma operação.
    exibirInformacoes(contexto) {
        console.log(
            `DISCIPLINA: ${this.nome} - PROF: ${contexto.professor} - SALA: ${contexto.sala} - HORÁRIO: ${contexto.horario}`
        );
    }
}
 
// --- Flyweight Factory ---
class FabricaDeDisciplinas {
    constructor() {
        this.disciplinas = {};
    }
 
    obterDisciplina(nome) {
        if (!this.disciplinas[nome]) {
            console.log(`--- Criando novo objeto Flyweight para a disciplina: ${nome} ---`);
            this.disciplinas[nome] = new DisciplinaFlyweight(nome);
        }
        return this.disciplinas[nome];
    }
 
    // Método auxiliar para ver quantas disciplinas únicas foram criadas.
    totalDeDisciplinasCriadas() {
        return Object.keys(this.disciplinas).length;
    }
}
 
// --- Cliente ---
class GradeHoraria {
    constructor() {
        this.fabricaDisciplinas = new FabricaDeDisciplinas();
        this.aulas = [];
    }
 
    // Adiciona uma nova aula à grade.
    adicionarAula(nomeDisciplina, professor, sala, horario) {
        const disciplina = this.fabricaDisciplinas.obterDisciplina(nomeDisciplina);
 
        this.aulas.push({
            disciplina: disciplina,
            professor: professor,
            sala: sala,
            horario: horario
        });
    }
 
    exibirGrade() {
        console.log("\n===== Grade Horária Completa =====");
        this.aulas.forEach(aula => {
            aula.disciplina.exibirInformacoes(aula);
        });
    }
}
 
// --- Aplicação Geral da Estrutura ---
const grade = new GradeHoraria();
 
console.log("Adicionando aulas na grade...");
 
grade.adicionarAula("Matemática", "Prof. Carlos ", "101", "08:00");
grade.adicionarAula("Português ", "Prof. Ana    ", "102", "09:00");
grade.adicionarAula("História  ", "Prof. Ricardo", "103", "10:00");
 
grade.adicionarAula("Matemática", "Prof. Mônica ", "201", "08:00");
grade.adicionarAula("Português ", "Prof. Ana    ", "202", "11:00");
 
grade.exibirGrade();
 
console.log("\n=====================================");
console.log(`Total de aulas na grade: ${grade.aulas.length}`);
console.log(`Total de objetos 'Disciplina' realmente criados: ${grade.fabricaDisciplinas.totalDeDisciplinasCriadas()}`);
console.log("=====================================");