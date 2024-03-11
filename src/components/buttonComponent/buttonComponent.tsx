'use client'
import styled from "styled-components"

const StyledButton = styled.button`
padding: 25px 72px;
background-color: #B88E2F;
border: 0;

cursor: pointer;
font-weight: bold;
color: white;

text-transform: capitalize;


width: max-content;
`

const ButtonComponent = ({text}:{text:string}) => {
    return (
        <StyledButton>{text}</StyledButton>
    )
}

export default ButtonComponent