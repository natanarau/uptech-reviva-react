import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CartProduct from '.'
import { ContextDataCartProvider } from "context/ContextDataCart";

describe('Verify data of cart', () => {

  test('Verify image', async () => {
    render(<ContextDataCartProvider><CartProduct /></ContextDataCartProvider>)
    const img = document.querySelector('img')
    await waitFor(() => expect(img).toBeInTheDocument())
  })
  test('Verify geral', async () => {  
    render(<ContextDataCartProvider><CartProduct /></ContextDataCartProvider>)
    const details = document.querySelector('p')
    await waitFor(() => expect(details).toBeInTheDocument())
  })
  test('Verify change input quantity', async () => {  
    render(<ContextDataCartProvider><CartProduct /></ContextDataCartProvider>)
    const input = screen.getByRole('1')
    fireEvent.change(input)
    await waitFor(() => expect(input).toBeInTheDocument())
  })
})