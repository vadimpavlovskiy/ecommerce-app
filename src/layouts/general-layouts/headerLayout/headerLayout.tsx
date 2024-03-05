'use client'
import Image from "next/image"
import styled from "styled-components"
import ListHeaderLayout from "../listHeaderLayout/listHeaderLayout";
import ProfileIconComponent from "@/components/profileIconComponent/profileIconComponent";

const StyledLayout = styled.div`
display: flex;

align-items: center;
justify-content: space-between;
padding-bottom: 1rem;
border-bottom: 1px solid #E3E3E3;


`

const HeaderLayout = ({}) => {

    return (
        <StyledLayout>
             <Image src={'/logo/logo.svg'} alt="logo" width={185} height={40} />
             <ListHeaderLayout />
             <div>
                <ProfileIconComponent />
             </div>
        </StyledLayout>     
    )
}

export default HeaderLayout