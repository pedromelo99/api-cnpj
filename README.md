# 🔍 Consulta CNPJ

Aplicação web desenvolvida em React para consulta de informações de empresas brasileiras através do CNPJ. O sistema valida o CNPJ, busca os dados em uma API pública e exibe as informações de forma organizada e responsiva.

## 📋 Descrição

Este projeto foi desenvolvido como trabalho acadêmico e permite que usuários consultem dados cadastrais de empresas brasileiras de forma rápida e intuitiva. A aplicação realiza validação completa do CNPJ (incluindo dígitos verificadores) e apresenta informações detalhadas sobre a empresa consultada.

## ✨ Funcionalidades

- ✅ **Validação de CNPJ**: Validação completa com verificação de dígitos verificadores
- 🔄 **Formatação automática**: O CNPJ é formatado automaticamente durante a digitação (00.000.000/0000-00)
- 🔍 **Busca em API**: Consulta informações atualizadas através da Brasil API
- 📊 **Exibição de dados**: Apresenta dados completos da empresa de forma organizada
- 💾 **Armazenamento local**: Salva o último CNPJ consultado no localStorage
- 📱 **Design responsivo**: Interface adaptada para desktop, tablet e mobile
- ⚡ **Feedback visual**: Estados de carregamento, erro e sucesso
- ♿ **Acessibilidade**: Componentes com boas práticas de acessibilidade

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8** - Build tool e dev server ultrarrápido
- **CSS3** - Estilização com CSS Modules e variáveis CSS
- **Brasil API** - API pública para consulta de CNPJ
- **JavaScript ES6+** - Linguagem de programação

## 📂 Estrutura do Projeto

```
api-cnpj/
├── public/                      # Arquivos públicos estáticos
├── src/
│   ├── components/              # Componentes React
│   │   ├── Header.jsx          # Cabeçalho da aplicação
│   │   ├── Header.css
│   │   ├── Footer.jsx          # Rodapé da aplicação
│   │   ├── Footer.css
│   │   ├── SearchCNPJ.jsx      # Componente principal de busca
│   │   ├── SearchCNPJ.css
│   │   ├── Input.jsx           # Input reutilizável
│   │   ├── Input.css
│   │   ├── Button.jsx          # Botão reutilizável
│   │   ├── Button.css
│   │   ├── Card.jsx            # Card para exibir dados da empresa
│   │   ├── Card.css
│   │   ├── Loader.jsx          # Indicador de carregamento
│   │   ├── Loader.css
│   │   ├── ErrorMessage.jsx    # Mensagem de erro
│   │   └── ErrorMessage.css
│   ├── services/                # Serviços de comunicação
│   │   └── cnpjService.js      # Serviço de API do CNPJ
│   ├── utils/                   # Utilitários
│   │   └── cnpjValidator.js    # Validação e formatação de CNPJ
│   ├── styles/                  # Estilos globais
│   │   ├── global.css          # Reset e variáveis CSS
│   │   └── App.css             # Estilos do componente App
│   ├── App.jsx                  # Componente raiz
│   └── main.jsx                 # Ponto de entrada
├── index.html                   # HTML base
├── package.json                 # Dependências e scripts
├── vite.config.js              # Configuração do Vite
└── README.md                    # Documentação
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório ou baixe os arquivos:
```bash
cd api-cnpj
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a build de produção localmente

## 🎯 Como Usar a Aplicação

1. **Digite o CNPJ**: Insira um CNPJ válido no campo de busca (com ou sem formatação)
2. **Validação automática**: O sistema valida o formato e os dígitos verificadores
3. **Buscar**: Clique no botão "Buscar" ou pressione Enter
4. **Visualizar dados**: As informações da empresa serão exibidas em um card organizado
5. **Limpar**: Use o botão "Limpar" para fazer uma nova consulta

### Exemplo de CNPJ para teste:
- **00.000.000/0001-91** (CNPJ válido para teste)

## 📡 API Utilizada

O projeto utiliza a **Brasil API** para consulta de CNPJs:

- **Endpoint**: `https://brasilapi.com.br/api/cnpj/v1/{cnpj}`
- **Documentação**: [Brasil API - CNPJ](https://brasilapi.com.br/docs#tag/CNPJ)
- **Limitações**: API pública gratuita, sem necessidade de autenticação

### Dados Retornados

A aplicação exibe as seguintes informações da empresa:

- **Informações Principais**
  - CNPJ
  - Razão Social
  - Nome Fantasia
  - Data de Abertura

- **Situação Cadastral**
  - Situação (Ativa/Inativa)
  - Data da Situação

- **Endereço**
  - Logradouro, Número, Complemento
  - Bairro, Município, UF, CEP

- **Contato**
  - Telefone
  - E-mail

- **Atividade Econômica**
  - CNAE Principal (Código e Descrição)

- **Outras Informações**
  - Capital Social
  - Natureza Jurídica
  - Porte

## 🎨 Características do Design

- **Paleta de Cores**: Tons de azul para elementos principais, com cinzas para neutralidade
- **Responsividade**: Layout adaptativo com breakpoints para mobile (< 768px)
- **Feedback Visual**: 
  - Estados de loading com spinner animado
  - Mensagens de erro com ícones e animações
  - Badges coloridos para situação cadastral
- **Acessibilidade**: Labels, placeholders e mensagens de erro descritivas

## 🔧 Componentes Principais

### SearchCNPJ
Componente principal que gerencia todo o fluxo da aplicação:
- Estado do CNPJ digitado
- Estado de loading
- Estado de erro
- Dados da empresa
- Validação e formatação
- Chamada à API
- Armazenamento no localStorage

### cnpjValidator
Utilitário com funções de validação:
- `validateCNPJ()` - Valida CNPJ com dígitos verificadores
- `formatCNPJ()` - Formata CNPJ para XX.XXX.XXX/XXXX-XX
- `cleanCNPJ()` - Remove caracteres não numéricos

### cnpjService
Serviço de comunicação com a API:
- `fetchCNPJ()` - Busca dados do CNPJ na API
- `formatCNPJData()` - Formata dados retornados pela API

## 📱 Responsividade

A aplicação é totalmente responsiva e foi testada em:
- Desktop (1920x1080 e superiores)
- Tablets (768px - 1024px)
- Smartphones (320px - 767px)

## 🤝 Divisão de Tarefas do Grupo

Este projeto foi dividido em 5 áreas de responsabilidade:

1. **Integração da API** - Configuração do projeto, serviço de API e testes
2. **UI/UX + Layout** - Design, protótipo, paleta de cores e responsividade
3. **Componentização** - Criação de componentes reutilizáveis
4. **Lógica de Estado** - Gerenciamento de estados, validações e fluxo
5. **Documentação + Testes** - README, estrutura e testes básicos

## 📝 Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

## 🔗 Links Úteis

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Brasil API](https://brasilapi.com.br/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Desenvolvido como projeto acadêmico** 🎓
