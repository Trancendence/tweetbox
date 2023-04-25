import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
 display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 150px;
`

export const LinkPage = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 28px;
     font-family: inherit;
    &.active {
        color: #5CD3A8;
    }
`;