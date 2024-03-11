
import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react"
import styled from "styled-components"
import IInput from "./types/input"

const StyledContainer = styled.div`
    display: grid;

`

const StyledInput = styled.input`
    border: 1px solid #9F9F9F;
    border-radius: 10px;

    padding: 26px 0 26px 30px;
    width: 300px;
`

const InputComponent = ({placeholder, value, type, required, onChange, setStateFunction, min, max}:IInput) => {
    return (
        <StyledContainer>
            <StyledInput onChange={(e) => {
                onChange(e, setStateFunction)
            }} required={required} type={type} value={value} placeholder={placeholder} min={min} max={max} />
        </StyledContainer>
    )
}

export default InputComponent;