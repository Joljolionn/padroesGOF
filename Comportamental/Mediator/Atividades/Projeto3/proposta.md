# ATIVIDADE 03 – PLATAFORMA STREAMMING

Implemente o padrão Mediator para controlar um player de vídeo onde vários componentes 
trabalham juntos sem contato direto.

- ### Componentes obrigatórios
    - Usuário
    - Player de Vídeo
    - Gerenciador de Legendas
    - Controle de Qualidade (auto ajuste)
    - StreamingCentral (Mediator)

- ### Regras
    1. O Usuário pode:
        - o dar play/pause
        - o trocar legenda
        - o alterar qualidade
    2. O controle de qualidade deve reagir sozinho quando a internet estiver lenta, avisando o 
    mediator.
    3. O Player só deve mudar o estado quando o mediator autorizar.
    4. Legendas, Player e Controle de Qualidade não podem se comunicar entre si, só com 
    o mediator.

- ### Demonstração esperada
    - Simular:
        1. Usuário dá play
        2. Usuário troca legenda
        3. Internet cai → qualidade reduz automaticamente
        4. Usuário força resolução maior → mediator decide permitir ou não
