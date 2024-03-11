'use client'
import ButtonComponent from "@/components/buttonComponent/buttonComponent"
import InputComponent from "@/components/inputComponent/inputComponent"
import { validateEmail } from "@/utils/validateEmail"
import { validatePassword } from "@/utils/validatePassword"
import Link from "next/link"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
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
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState<boolean>(false);


    const onHandleChange = (event:ChangeEvent<HTMLInputElement>, setState:Dispatch<SetStateAction<string>>) => {
        event.preventDefault();
        return setState(event.target.value)
    };

    const onSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    const errors = {
        email: '',
        password: ''
    };

    if (!validateEmail(email)) {
        errors.email = "Wrong email. Please, try again";
    }

    if(!validatePassword(password)) {
        errors.password = 'Your password must have at least one number and one special character'
    }
    setErrors(errors);

        
    }
    return (
        <StyledContainer>
            <h2>Login into account</h2>
            <StyledForm onSubmit={onSubmit}>
                        <InputComponent setStateFunction={setEmail} onChange={onHandleChange} required={true} type="email" placeholder="Email" value={email} min={11} max={255} />
                        <InputComponent setStateFunction={setPassword} onChange={onHandleChange} required={true} type="password" placeholder="Password" value={password} min={12} max={255} />
                        <ButtonComponent type="submit" text="Login" />
                        {Object.entries(errors).map(([key, error]) => {
                            if(error) {
                                return (
                                    <span
                                    key={`${key}: ${error}`}
                                    style={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                    >
                                    {key.toUpperCase()}: {error}
                                    </span>
                                )    
                            }
                            })}
            </StyledForm>
            <p>Dont have an account? <Link href="/register"> Register now</Link></p>
        </StyledContainer>
    )
}

export default SignInForm