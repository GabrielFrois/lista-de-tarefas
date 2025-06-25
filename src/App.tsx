import React from 'react';
import { TarefaProvider } from './contexts/TarefaContext';
import FormNovaTarefa from './components/FormNovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <TarefaProvider>
      <GlobalStyle />
      <h1>Tarefas do Dia</h1>
      <FormNovaTarefa />
      <ListaTarefas />
    </TarefaProvider>
  );
};

export default App;