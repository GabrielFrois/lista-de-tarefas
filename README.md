# Tarefas do Dia

Aplicação React com TypeScript para gerenciamento de tarefas diárias. Permite adicionar, listar, marcar como concluída e remover tarefas, com persistência local via `localStorage`.

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Persistência automática com localStorage
- Estilização com styled-components
- Tipagem com TypeScript
- Estado global com Context API

---

## Tecnologias Utilizadas

- React
- TypeScript
- styled-components
- Context API

---

## Instalação e Execução

### Passo a passo

```bash
# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```
Abra no navegador: http://localhost:5173

## Estrutura do Projeto
```
src/
├── App.tsx
├── main.tsx
├── types.ts
├── contexts/
│   └── TarefaContext.tsx
├── components/
│   ├── FormNovaTarefa.tsx
│   └── ListaTarefas.tsx
└── styles/
    └── GlobalStyle.ts
```

