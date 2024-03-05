'use client'
import CategoryCardComponent from "@/components/categoryCardComponent/categoryCardComponent"
import styled from "styled-components"
import { FaArrowRightLong } from "react-icons/fa6";

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2.5%;

    @media (max-width: 1024px) {

    }
`

const StyledImages = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        justify-items: stretch;
    }

    *{
        grid-column: span 2 / span 2;
    }
`
const StyledMoreButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    transition: opacity 300ms, transform 300ms;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #B88E2F;
        text-underline-offset: 0.4em;
        transform: translate3d(0, 0.2em, 0);
    }
`

const SectionTwoLayout = ({}) => {
    return (
        <section>
            <StyledSection>
                <div>
                    <h2 style={{color: '#333333', fontSize: '32px'}}>Browse the Range</h2>
                    <p style={{marginBottom: '3em', color: '#666666'}}>
                        Discover suitable furniture for your house with us
                    </p>
                </div>
                <StyledMoreButton >
                    <span style={{fontStyle: 'oblique'}}>Explore more</span>
                    <span><FaArrowRightLong color="#666666" size={20} /></span>
                </StyledMoreButton>
            </StyledSection>
            <StyledImages>
                <CategoryCardComponent />
                <CategoryCardComponent />
                <CategoryCardComponent />
                <CategoryCardComponent />
            </StyledImages>
        </section>
    )
}

export default SectionTwoLayout