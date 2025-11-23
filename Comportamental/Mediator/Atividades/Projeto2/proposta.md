# ATIVIDADE 02 – AEROPORTO

Implemente um sistema de coordenação de aeronaves utilizando o padrão Mediator.
A TorreDeControle será o mediator responsável pela ordem das operações.

- ### Componentes obrigatórios
    - Aeronave
    - Equipe de Manutenção
    - Equipe de Combustível
    - Torre de Controle (Mediator)

- ### Regras
    1. A Aeronave solicita procedimento de decolagem.
    2. Antes de liberar a pista, a Torre deve:
        - verificar manutenção
        - verificar abastecimento
    3. Após receber as confirmações, a Torre libera a Aeronave para decolar.
    4. Em caso de falha técnica reportada, a solicitação deve ganhar prioridade máxima na 
    fila.
    5. Nenhuma equipe pode falar diretamente com a aeronave — somente via Torre.

- ### Demonstração esperada
    - Criar 2 aeronaves normais e 1 com falha técnica.
    - Mostrar que a de falha passa na frente.
    - Exibir logs de manutenção, abastecimento e decolagem coordenados pela torre.
