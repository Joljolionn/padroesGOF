# ATIVIDADE 01 – SISTEMA HOSPITALAR:

Implemente o padrão Mediator para coordenar o fluxo de atendimento em um hospital.
Os componentes envolvidos não podem conversar diretamente entre si.
Somente o HospitalCentral (o mediator) controla todo o processo.

- ### Componentes obrigatórios
    - Paciente
    - Enfermeira de Triagem
    - Médico
    - Laboratório
    - Farmácia

- ### Regras
    1. O Paciente chega e solicita atendimento.
    2. A Triagem analisa e classifica como urgente ou comum (urgentes têm prioridade).
    3. O Médico atende o paciente e pode solicitar:
        - o pedido de exame ao Laboratório
        - o receita para retirar medicamento na Farmácia
    4. O Laboratório devolve o resultado ao mediator.
    5. A Farmácia libera o medicamento.
    6. Nenhum componente conversa direto com outro — sempre pela HospitalCentral.

- ### Demonstração esperada
    - Criar 3 pacientes (2 comuns e 1 urgente).
    - Mostrar que o urgente fura a fila.
    - Médico tratando exames e liberando receitas de acordo com a ordem decidida pelo 
    mediator.
