
import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
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

const InputComponent = (
    {placeholder, value, type, required, onChange, setState}
    :
    {
        placeholder:string, 
        value: string, 
        type: HTMLInputTypeAttribute | undefined, 
        required?: boolean | undefined, 
        onChange:(event: ChangeEvent<HTMLInputElement>, setState: Dispatch<SetStateAction<string>>) => void,
        setState: Dispatch<SetStateAction<string>>

}) => {
    return (
        <StyledContainer>
            <StyledInput onChange={(event)=>onChange(event, setState)} required={required} type={type} value={value} placeholder={placeholder} />
        </StyledContainer>
    )
}

export default InputComponent;