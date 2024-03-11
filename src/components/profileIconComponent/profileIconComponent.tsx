import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";

const StyledLinkIcon = styled(Link)
`
    cursor: pointer;
`

const ProfileIconComponent = ({}) => {
    return (
        <StyledLinkIcon href={'login'}>
            <CgProfile size={28} color="black" />
        </StyledLinkIcon>
    )
}

export default ProfileIconComponent