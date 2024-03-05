'use client'

import Image from "next/image"
import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`

const StyledImage = styled(Image)`
transition: 500ms;
cursor: pointer;

&:hover {
    transform: scale(1.05);
}

`

const CategoryCardComponent = ({}) => {
    return (
        <StyledDiv>
            <StyledImage src={'/images/section-two-photo.png'} alt={'category photo'} width={300} height={380} />
            <p style={{fontSize: '24px', fontWeight: 'bolder'}}>Dining</p>
        </StyledDiv>
    )
}

export default CategoryCardComponent;