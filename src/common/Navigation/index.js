import { Link } from "react-router-dom";
import { UpperMenu, MenuItem, Menu } from "./styled";

export const Navigation = () => {
  return (
    <UpperMenu>
      <Menu>
        <MenuItem>
          <Link to="/lista-zadan">Zadania</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/o-autorze">O autorze</Link>
        </MenuItem>
      </Menu>
    </UpperMenu>
  );
};
