import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header name="editorials">
          <img src="/assets/tdtlogo.png" alt="logo" style={{marginRight: '10px'}}/>
          TDTApp
        </Menu.Item>
        <Menu.Item name="activities" />

        <Menu.Item>
            <Button onClick={openCreateForm} positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
