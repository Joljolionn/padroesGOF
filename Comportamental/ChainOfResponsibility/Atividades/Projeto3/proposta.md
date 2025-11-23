# PROJETO 03 – VALIDAÇÃO DE FORMULÁRIO COM CHAIN OF RESPONSIBILITY:
#### Desenvolva um sistema de validação de formulário utilizando o padrão Chain of Responsibility, onde cada manipulador valida um campo específico:
- ValidadorEmail: Verifica se o campo de email está em um formato válido.
- ValidadorSenha: Verifica se a senha atende aos critérios de complexidade (mínimo de caracteres, uso de números e letras maiúsculas).
- ValidadorUsername: Verifica se o nome de usuário é único (pode simular a verificação em uma lista pré-definida).
#### Tarefas:
- Implemente os validadores na linguagem que preferir.
- Configure a cadeia de responsabilidade para processar os dados do formulário.
- Caso um validador falhe, o processo deve ser interrompido e uma mensagem de erro deve ser retornada.
- Teste o sistema com diferentes entradas para garantir que as validações estão funcionando corretamente
