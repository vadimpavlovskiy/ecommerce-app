
import { HTMLInputTypeAttribute } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: grid;

`

const StyledInput = styled.input`
    border: 1px solid #9F9F9F;
    border-radius: 10px;

    padding: 26px 0 26px 30px;
    width: 300px;
`

const InputComponent = ({placeholder, value, type, required}:{placeholder:string, value: string, type: HTMLInputTypeAttribute | undefined, required?: boolean | undefined}) => {
    return (
        <StyledContainer>
            <StyledInput required={required} type={type} value={value} placeholder={placeholder} />
        </StyledContainer>
    )
}

export default InputComponent;