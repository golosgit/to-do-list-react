import { UpperMenu, MenuItem, Menu, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <UpperMenu>
      <Menu>
        <MenuItem>
          <StyledNavLink to="/lista-zadan">Zadania</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/o-autorze">O autorze</StyledNavLink>
        </MenuItem>
      </Menu>
    </UpperMenu>
  );
};
