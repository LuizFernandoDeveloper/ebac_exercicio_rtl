import Post from "..";
import { screen, render } from '@testing-library/react'

describe('Teste para o post', ()=>{
    test('Deve renderizar corretamente', () => {
        render(<Post>Olha só que legal minha miniatura do Batmóvel.</Post>)
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
    })
})

