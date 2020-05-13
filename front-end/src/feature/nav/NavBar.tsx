import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import ActivityStore from '../../app/stores/activityStore';
import { observer } from "mobx-react-lite";


const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header name="editorials">
          <img src="/assets/tdtlogo.png" alt="logo" style={{marginRight: '10px'}}/>
          TDTApp
        </Menu.Item>
        <Menu.Item name="activities" />

        <Menu.Item>
            <Button onClick={activityStore.openCreateForm} positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);