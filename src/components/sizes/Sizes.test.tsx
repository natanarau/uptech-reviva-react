import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { SizeProduct } from '.'

describe('Check all sizes', () => {
  test('Check size P', async () => {  
    render(<SizeProduct />)
    const p = screen.getByText('P')
    fireEvent.click(p)
    await waitFor(() => expect(p).toBeInTheDocument())
  })
  test('Check size M', async () => {  
    render(<SizeProduct />)
    const m = screen.getByText('M')
    fireEvent.click(m)
    await waitFor(() => expect(m).toBeInTheDocument())
  })
  test('Check size G', async () => {  
    render(<SizeProduct />)
    const g = screen.getByText('G')
    fireEvent.click(g)
    await waitFor(() => expect(g).toBeInTheDocument())
  })
})