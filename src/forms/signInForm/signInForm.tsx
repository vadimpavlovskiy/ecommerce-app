'use client'
import ButtonComponent from "@/components/buttonComponent/buttonComponent"
import InputComponent from "@/components/inputComponent/inputComponent"
import Link from "next/link"
import styled from "styled-components"


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 100px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap:36px;
`


const SignInForm = () => {
    return (
        <StyledContainer>
            <h2>Login into account</h2>
            <StyledForm>
                        <InputComponent required={true} type="email" placeholder="Email" value="" />
                        <InputComponent required={true} type="password" placeholder="Password" value="" />
                        <ButtonComponent text="Login" />
            </StyledForm>
            <p>Dont have an account? <Link href="/register"> Register now</Link></p>
        </StyledContainer>
    )
}

export default SignInForm