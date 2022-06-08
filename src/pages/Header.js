import React from "react";
import "./Header.css";
import { MenuItem } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
const Header = () => {
  return (
    <div className="style">
      <Menu  inverted pointing secondary>
        <MenuItem>
          <h2 className="header_style">ToDo | Make It Better </h2>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
