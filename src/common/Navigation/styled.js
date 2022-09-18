import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UpperMenu = styled.div`
  background-color: teal;
  padding: 15px;
`;

export const Menu = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  color: white;
  display: inline;
  padding: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
 
  &.active {
    font-weight: 700;
  }
`;
