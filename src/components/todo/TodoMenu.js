import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import "./TodoMenu.css";
const TodoMenu = ({ filter, button }) => {
  return (
    <div className="categories">
      <Menu vertical>
        {button.map((stat, i) => {
          return (
            <Button
              className="menu-items"
              basic
              attached
              onClick={() => filter(stat)}
            >
              <Menu.Item fitted>
                {stat} Görevler
                <Icon name="calendar check" />
              </Menu.Item>
            </Button>
          );
        })}
      </Menu>
    </div>
  );
};
export default TodoMenu;
