# 📄 Test Plan – Sistema de Login com Cadastro Local

## 1. Objetivo
Validar o funcionamento completo do sistema de cadastro e login, incluindo validações de campos, persistência de dados e autenticação utilizando armazenamento local (localStorage).

---

## 2. Escopo

Serão testadas as seguintes funcionalidades:
- Cadastro de usuário
- Login de usuário
- Validação de campos obrigatórios
- Persistência de dados no localStorage
- Logout do sistema
- Regras de validação (duplicidade, espaços, segurança básica)

---

## 3. Fora do Escopo

Não serão testadas:
- Integração com banco de dados externo
- Recuperação de senha
- Autenticação via redes sociais
- Testes de performance avançados

---

## 4. Estratégia de Teste

Os testes serão realizados manualmente, baseados em casos de teste estruturados, cobrindo cenários positivos e negativos.

Serão aplicadas técnicas de:
- Teste funcional
- Teste de validação de entrada
- Teste de persistência de dados
- Teste de regressão básico

---

## 5. Ambiente de Teste

- Navegador: Google Chrome  
- Sistema Operacional: Windows  
- Armazenamento: localStorage (browser)

---

## 6. Critérios de Entrada

- Sistema de login/cadastro funcional disponível  
- Interface carregando corretamente  
- Acesso ao navegador configurado  

---

## 7. Critérios de Saída

- Todos os casos de teste executados (TC01 a TC15)  
- Todos os bugs identificados e documentados (se houver)  
- Funcionalidades principais validadas com sucesso.

---

## 8. Riscos

- Falhas no localStorage do navegador  
- Comportamento inconsistente entre navegadores  
- Validações incompletas no frontend  
- Possíveis bugs de persistência de dados  

---

## 9. Casos de Teste Associados

Os testes serão executados com base nos seguintes casos:

- TC01 – Criar cadastro  
- TC02 – Cadastro com usuário já existente  
- TC03 – Cadastro com campos vazios  
- TC04 – Login com dados válidos  
- TC05 – Login com senha incorreta  
- TC06 – Login com usuário não cadastrado  
- TC07 – Dados salvos no localStorage  
- TC08 – Logout do sistema  
- TC09 – Senha não visível na tela  
- TC10 – Tentativa de login com campos vazios  
- TC11 – Tentativa de login sem senha  
- TC12 – Manter login após recarregar página  
- TC13 – Atualizar página na tela de login  
- TC14 – Sensibilidade a maiúsculas/minúsculas no cadastro  
- TC15 – Cadastro com espaços no usuário  

---

## 10. Entregáveis

- Documento de plano de teste (este arquivo)  
- Casos de teste detalhados (planilha Google Sheets)  
- Registro de bugs (se encontrados)