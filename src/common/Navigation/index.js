import { UpperMenu, MenuItem, Menu, StyledNavLink } from "./styled";
import { toAuthor, toTaskList } from "../../routes";

export const Navigation = () => {
  return (
    <UpperMenu>
      <Menu>
        <MenuItem>
          <StyledNavLink to={toTaskList()}>Zadania</StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </MenuItem>
      </Menu>
    </UpperMenu>
  );
};
