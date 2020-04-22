import React, { useState, useEffect, Fragment } from "react";
import { Header, Icon, List, Container } from "semantic-ui-react";
import axios from "axios";
import "./style.css";
import { IActivity } from "../models/activity";
import { NavBar } from "../../feature/nav/NavBar";
import { ActivityDashboard } from "../../feature/nav/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []); // empty array to stop useEffect

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </Fragment>
  );
};

export default App;
