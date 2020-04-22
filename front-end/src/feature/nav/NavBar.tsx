import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header name="editorials">
          <img src="/assets/tdtlogo.png" alt="logo" style={{marginRight: '10px'}}/>
          TDTApp
        </Menu.Item>
        <Menu.Item name="activities" />

        <Menu.Item>
            <Button positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
