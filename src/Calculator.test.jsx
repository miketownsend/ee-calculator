import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('Calculator layout', () => {
  it('has a button for each of the numbers 0 - 9', () => {
    const { getByText } = render(<App />)

    for (let i = 0; i <= 9; i += 1) {
      expect(getByText(`${i}`, { selector: 'button' })).toBeInTheDocument()
    }
  })

  it('has a button for the operators + and =', () => {
    const { getByText } = render(<App />)

    expect(getByText('+', { selector: 'button' })).toBeInTheDocument()
    expect(getByText('=', { selector: 'button' })).toBeInTheDocument()
  })

  it('shows an are to show the result', () => {
    const { getByLabelText } = render(<App />)
    expect(getByLabelText(/result/i)).toBeInTheDocument()
  })
})

describe('Calculator plus operator', () => {
  const clickButtonWithValue = (wrapper, value) => {
    fireEvent.click(wrapper.getByLabelText(value))
  }

  const getResult = (wrapper) => {
    return wrapper.getByLabelText(/result/i).textContent
  }

  it('should show the current number that has been pressed', () => {
    const wrapper = render(<App />)
    clickButtonWithValue(wrapper, '5')
    clickButtonWithValue(wrapper, '6')
    expect(getResult(wrapper)).toBe('56')
  })
})
