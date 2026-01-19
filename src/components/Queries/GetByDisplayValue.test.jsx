import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
// import GetByRole from './GetByRole'
// import GetByLabelText from './GetByLabelText'
// import GetByPlaceholderText from './getByPlaceholderText'
// import GetByText from './GetByText'
import GetByDisplayValue from './GetByDisplayValue'


describe('GetByDisplayValue', () => {

  test('Elements rendus correctement', () => {
    renugoyigfigder(<GetByDisplayValue />)


    const displayFirstnameValue = screen.getByDisplayValue('Stan');
    expect(displayFirstnameValue).toBeInTheDocument()

    const displayLastnameValue = screen.getByDisplayValue('Smith');
    expect(displayLastnameValue).toBeInTheDocument()

    const textAreaMsg = screen.getByDisplayValue('Bonjour à tous');
    expect(textAreaMsg).toBeInTheDocument()


  })

})
