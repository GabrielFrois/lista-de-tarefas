import React, { useState } from 'react';
import styled from 'styled-components';
import { useTarefa } from '../contexts/TarefaContext';

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
`;

const NovaTarefa: React.FC = () => {
    const { adicionarTarefa } = useTarefa();
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (descricao.trim()) {
            adicionarTarefa(descricao);
            setDescricao('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
            />
            <Button type="submit">Adicionar</Button>
        </Form>
    );
};

export default NovaTarefa;