import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Total from '.'
import { ContextDataCartProvider } from "context/ContextDataCart";

describe('Verify total', () => {
  test('Verify geral', async () => {  
    render(<ContextDataCartProvider><Total /></ContextDataCartProvider>)
    const total = document.querySelector('h2')
    await waitFor(() => expect(total).toBeInTheDocument())
  })

  test('Verify button pay', async () => {  
    render(<ContextDataCartProvider><Total /></ContextDataCartProvider>)
    const button = screen.getByText('Ir para pagamento')
    fireEvent.click(button)
    await waitFor(() => expect(button).toBeInTheDocument())
  })
})