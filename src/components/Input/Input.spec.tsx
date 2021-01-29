import {render, screen} from '@testing-library/jest-dom';
import Input from './Input'

describe('<Input>', () => {
    it('Should show label', () => {
        render(<Input label="teste_label" />)
        screen.getByText('teste_label')
    })

    it('Should render input', () => {
        render(<Input label="teste_label" data-testid="input_test"/>)
        screen.getByTestId('input_test')
    })
})