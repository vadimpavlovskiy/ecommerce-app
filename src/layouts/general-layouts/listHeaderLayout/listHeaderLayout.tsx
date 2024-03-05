'use client'
import styled from "styled-components"

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    gap: 75px;
    font-weight: bold;

    li {
        cursor: pointer;
        transition: opacity 300ms, transform 300ms;

    }

    li:hover {
        text-decoration: underline 0.15em #B88E2F;
        text-underline-offset: 0.4em;
        transform: translate3d(0, 0.1em, 0);
        
    }

`

const ListHeaderLayout = ({}) => {
    return (
        <StyledList>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact Us</li>
        </StyledList>
    )
}

export default ListHeaderLayout;