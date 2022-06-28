import {render, screen, waitFor } from "@testing-library/react";
import Logo from '.'

describe('Check if the logo exists', () => {
  test('Check title', async () => {  
    render(<Logo />)
    const titleLogo = screen.getByText('Reviva Fashion')
    await waitFor(() => expect(titleLogo).toBeInTheDocument())
  })
})