'use client'

import ButtonComponent from "@/components/buttonComponent/buttonComponent"
import Image from "next/image"
import styled from "styled-components"

const StyledSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
gap: 30%;
margin-top: 5%;

justify-content: space-around;
align-items: center;

@media (max-width: 768px) {
    flex-direction: column;
}
`

const StyledBlock = styled.div`
display: flex;
flex-direction: column;

background-color: #FFF3E3;
padding: 62px 43px 37px 39px;

border-radius: 10px;

@media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
}
*{
    margin: 0;
}
`

const StyledImage = styled(Image)`

border-radius: 80px 0;
margin-right: 5%;


@media (max-width: 1024px) {
    display: none;
}

`
const SectionOneLayout = ({}) => {
    return (
        <StyledSection>
            <StyledBlock>
                <p style={{fontSize: '16px', fontWeight: "normal", letterSpacing: '3px'}}>New Arrival</p>
                <h1 style={{fontSize: '52px', fontWeight: 'bold', lineHeight: '65px', color: '#B88E2F'}}>Discover Our New Collection!</h1>
                <p style={{fontSize: '18px', fontWeight: 'bolder', color: '#333333', marginBottom: '46px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id iure voluptatum distinctio totam porro aspernatur perspiciatis.</p>
                <ButtonComponent />
            </StyledBlock>
            <StyledImage src={'/images/section-one-photo.png'} width={300} height={562} alt='New Chair' />
        </StyledSection>
    )
}

export default SectionOneLayout