# Bug 01 - O sistema aceita usuários "Duplicados" Caso haja variação de letras maiúsculas e minúsculas.

## Passos para reproduzir
1. Acessar tela de cadastro
2. Inserir usuário já cadastrado porém com variação de letra maiúscula e minúscula.
(Exemplo: Usuário existente - Mateus, duplicado - mateus)
3. Inserir senha
4. Clicar em cadastrar

## Resultado esperado
Sistema não deve permitir criar usuário duplicado e deve resetar os campos de preenchimento

## Resultado atual
Sistema permite cadastro duplicado

## Severidade
Alta

# Bug 02 - O sistema aceita usuários com espaços.

## Passos para reproduzir
1. Acessar tela de cadastro
2. Inserir usuário com espaços
(Exemplo: Usuário Mateus Gustavo, forma correta - Mateus_Gustavo ou Mateus-Gustavo)
3. Inserir senha
4. Clicar em cadastrar

## Resultado esperado
Sistema não deve permitir criar usuário com espaço e deve resetar os campos de preenchimento apresentando o erro.

## Resultado atual
Sistema permite cadastro com espaço

## Severidade
Alta
