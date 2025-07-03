# Portfolio Angular - Caio Gonçalves Vieira

Este é um portfolio pessoal desenvolvido em Angular, apresentando projetos, experiências e informações de contato.

## 🚀 Tecnologias Utilizadas

- **Angular 16** - Framework principal
- **TypeScript** - Linguagem de programação
- **CSS3** - Estilização com gradientes e animações
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Manrope e Playfair Display)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── header/           # Componente de navegação
│   ├── inicio/           # Seção hero/principal
│   ├── sobre-mim/        # Seção sobre o desenvolvedor
│   ├── projetos/         # Seção de projetos (integração GitHub API)
│   ├── experiencias/     # Seção de experiências profissionais
│   ├── contato/          # Seção de contato e redes sociais
│   ├── footer/           # Rodapé
│   ├── app.component.*   # Componente principal
│   └── app.module.ts     # Módulo principal
├── styles.css            # Estilos globais
├── main.ts              # Ponto de entrada
└── index.html           # HTML principal
```

## 🎨 Características do Design

- **Design Moderno**: Interface com gradientes e efeitos glassmorphism
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Animações**: Transições suaves e efeitos visuais
- **Tema Escuro**: Paleta de cores escura com acentos coloridos
- **Navegação Suave**: Scroll suave entre seções

## 🛠️ Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:4200
   ```

## 📦 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run test` - Executa testes unitários

## 🔧 Configuração da API GitHub

Para carregar projetos reais do GitHub, edite o arquivo `src/app/projetos/projetos.component.ts` e substitua `'seu-usuario'` pelo seu nome de usuário do GitHub:

```typescript
const url = 'https://api.github.com/users/SEU-USUARIO/repos?sort=updated&direction=desc';
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona bem em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Funcionalidades

- ✅ Navegação entre seções
- ✅ Carregamento dinâmico de projetos do GitHub
- ✅ Design responsivo
- ✅ Animações e transições
- ✅ Links para redes sociais
- ✅ Informações de contato

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

---

**Desenvolvido por Caio Gonçalves Vieira** 