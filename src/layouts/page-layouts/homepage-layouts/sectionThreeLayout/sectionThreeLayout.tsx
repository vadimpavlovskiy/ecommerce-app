'use client'
import ButtonComponent from "@/components/buttonComponent/buttonComponent"
import ProductCardLarge from "@/components/productCardLarge/productCardLarge"
import styled from "styled-components"
const StyledCarts = styled.div`
    display: grid;
    gap: 24px;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        justify-items: center;
    }

`

const SectionThreeLayout = ({}) => {
    return (
        <section>
            <h2 style={{color: '#3A3A3A', fontSize: '40px'}}>Our Best Products</h2>
            <StyledCarts>
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
                <ProductCardLarge />
            </StyledCarts>
        </section>
    )
}

export default SectionThreeLayout
