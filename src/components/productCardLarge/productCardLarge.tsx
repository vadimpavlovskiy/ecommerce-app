'use client'
import Image from "next/image"
import styled from "styled-components";

const StyledCard = styled.div`
    display: grid;

    max-width: 312px;

    cursor: pointer;

    transition: 500ms;
    &:hover {
    transform: scale(1.05);
}

    *{
        margin: 0;
    }
`

const ProductCardLarge = ({}) => {
    return (
        <StyledCard>
            <Image src={'/images/section-three-photo.png'} width={312} height={400} alt="Comfortable bed set" />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px'}}>
                <div>
                    <h4>Potty</h4>
                    <p style={{color: 'rgba(0, 0, 0, 0.5)'}}>Cute bed set</p>
                </div>
                <div>
                    <p>$230.00</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default ProductCardLarge;