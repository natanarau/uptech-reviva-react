import { render, screen, waitFor } from "@testing-library/react";
import Search from '.'

describe('Check Search', () => {
  test('Check input Search', async () => {  
    render(<Search />)
    const input = screen.getByPlaceholderText('Faça sua busca aqui se ja souber o que está procurando...')
    await waitFor(() => expect(input).toBeInTheDocument())
  })
  test('Check button Search', async () => {  
    render(<Search />)
    const button = screen.getByAltText('Lupa para pesquisar')
    await waitFor(() => expect(button).toBeInTheDocument())
  })
})