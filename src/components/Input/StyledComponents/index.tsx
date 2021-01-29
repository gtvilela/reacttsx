import styled from 'styled-components'

const Label = styled.span`
    display: block;
`;

const InputTag = styled.input`
padding: 10px;
background: #f6f6f6;
border: 3px solid #777;
border-radius: 4px;

&focus {
    border-color: #000
}
`

export {
    Label,
    InputTag
}