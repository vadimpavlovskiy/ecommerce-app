'use client'
import ButtonComponent from "@/components/buttonComponent/buttonComponent"
import InputComponent from "@/components/inputComponent/inputComponent"
import loginSupabase from "@/utils/supabase/loginSupabase"
import { validateEmail } from "@/utils/validateEmail"
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

    const onSubmit = async(email:string, password:string) => {

    const errors = {
        email: '',
    };

    if (!validateEmail(email)) {
        errors.email = "Wrong email. Please, try again";
    }

    setErrors(errors);

    await loginSupabase(email, password);
        
    }
    return (
        <StyledContainer>
            <h2>Login into account</h2>
            <StyledForm onSubmit={(e:FormEvent<HTMLFormElement>)=>{
                e.preventDefault()
                onSubmit(email, password)
            }}>
                        <InputComponent setState={setEmail} onChange={onHandleChange} required={true} type="email" placeholder="Email" value={email} />
                        <InputComponent setState={setPassword} onChange={onHandleChange} required={true} type="password" placeholder="Password" value={password} />
                        <ButtonComponent type={'submit'} text="Login" />
            </StyledForm>
            <p>Dont have an account? <Link href="/register"> Register now</Link></p>
        </StyledContainer>
    )
}

export default SignInForm