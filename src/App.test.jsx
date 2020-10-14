import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Rendering the app', () => {
  it('shows Equal Experts branding in the heading', () => {
    const { getByText } = render(<App />)
    const header = getByText(/Equal Experts Calculator/i)
    expect(header).toBeInTheDocument()
  })
})
