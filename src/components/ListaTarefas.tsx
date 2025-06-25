import React from 'react';
import styled from 'styled-components';
import { useTarefa } from '../contexts/TarefaContext';

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li<{ concluida: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => (props.concluida ? '#c8f7c5' : '#f1f1f1')};
  margin-bottom: 10px;
  padding: 10px;
`;

const BotaoRemover = styled.button`
  margin-left: 10px;
`;

const ListaTarefas: React.FC = () => {
    const { tarefas, alternarConclusao, removerTarefa } = useTarefa();

    return (
        <Lista>
            {tarefas.map(tarefa => (
                <Item key={tarefa.id} concluida={tarefa.concluida}>
                    <div>
                        <input
                            type="checkbox"
                            checked={tarefa.concluida}
                            onChange={() => alternarConclusao(tarefa.id)}
                        />
                        <span style={{ marginLeft: 8 }}>{tarefa.descricao}</span>
                    </div>
                    <BotaoRemover onClick={() => removerTarefa(tarefa.id)}>Remover</BotaoRemover>
                </Item>
            ))}
        </Lista>
    );
};

export default ListaTarefas;