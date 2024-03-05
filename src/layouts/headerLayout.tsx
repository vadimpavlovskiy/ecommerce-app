'use client'
import styled from "styled-components"

const StyledLayout = styled.div`
color: red;
`

const HeaderLayout = ({}) => {
  console.log(process.browser)

    return (
        <StyledLayout>
             <h1>Hello Ecommerce World!</h1>
        </StyledLayout>     
    )
}

export default HeaderLayout