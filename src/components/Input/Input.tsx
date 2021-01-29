import React, { InputHTMLAttributes} from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input = ({label, ...others} : IProps) => {
    return(
        <label>
            <span></span>
        </label>
    )
}
export default Input