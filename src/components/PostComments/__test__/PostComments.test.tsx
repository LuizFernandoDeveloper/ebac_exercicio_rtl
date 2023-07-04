import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-tarefa'),{
            target:{
                value: 'teste de campo'
            }
        })
        fireEvent.click(screen.getByTestId('btn-tarefa'))
        expect(screen.getByText('teste de campo')).toBeInTheDocument();
    });
});