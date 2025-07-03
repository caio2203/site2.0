# 🚀 Instalação e Execução do Portfolio Angular

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

Para verificar se estão instalados:
```bash
node --version
npm --version
```

## 📦 Instalação

1. **Clone ou baixe o projeto**

2. **Navegue até a pasta do projeto:**
   ```bash
   cd sitecaio1.0
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Execução

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

2. **Acesse no navegador:**
   ```
   http://localhost:4200
   ```

## 🔧 Configurações Adicionais

### Personalizar Informações

1. **Editar dados pessoais:**
   - `src/app/inicio/inicio.component.ts` - Título e subtítulo
   - `src/app/sobre-mim/sobre-mim.component.ts` - Texto sobre você
   - `src/app/experiencias/experiencias.component.ts` - Experiências profissionais
   - `src/app/contato/contato.component.ts` - Links de redes sociais

2. **Configurar GitHub API:**
   - Edite `src/app/projetos/projetos.component.ts`
   - Substitua `'seu-usuario'` pelo seu nome de usuário do GitHub

### Comandos Úteis

```bash
# Desenvolvimento
npm start          # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm run test       # Executa testes

# Outros
npm run watch      # Build em modo watch
```

## 🐛 Solução de Problemas

### Erro de dependências
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Porta em uso
Se a porta 4200 estiver ocupada, o Angular automaticamente tentará a próxima porta disponível.

### Problemas de compilação
```bash
npm run build --prod
```

## 📱 Testando Responsividade

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

Use as ferramentas de desenvolvedor do navegador para testar diferentes tamanhos de tela.

## 🎨 Personalização

### Cores
As cores principais estão definidas nos arquivos CSS:
- Gradiente principal: `#0f0f23` → `#1a133d`
- Acentos: `#8a2be2` (roxo), `#f472b6` (rosa)

### Fontes
- **Manrope**: Para textos gerais
- **Playfair Display**: Para títulos

### Animações
As animações estão definidas nos arquivos CSS com `@keyframes`.

---

**Pronto! Seu portfolio Angular está funcionando! 🎉** 