import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Calculator layout', () => {
  it('has a button for each of the numbers 0 - 9', () => {
    const { getByText } = render(<App />)

    for (let i = 0; i <= 9; i += 1) {
      expect(getByText(`${i}`, { selector: 'button' })).toBeInTheDocument()
    }
  })

  it('has a button for the operators + - / * and =', () => {
    const { getByText } = render(<App />)

    expect(getByText('+', { selector: 'button' })).toBeInTheDocument()
    expect(getByText('-', { selector: 'button' })).toBeInTheDocument()
    expect(getByText('/', { selector: 'button' })).toBeInTheDocument()
    expect(getByText('*', { selector: 'button' })).toBeInTheDocument()
    expect(getByText('=', { selector: 'button' })).toBeInTheDocument()
  })
})
