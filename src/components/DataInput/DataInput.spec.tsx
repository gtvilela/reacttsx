import {render, screen} from '@testing-library/jest-dom';
import DataInput from './DataInput'

describe('<DataInput>', () => {
    it('Should show calender', () => {
        render(<DataInput startDate={new Date()}/>)
        screen.debug()
    })
})