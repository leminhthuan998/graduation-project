import React, {
  useEffect,
  Fragment,
  useContext,
} from "react";
import { Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import "./style.css";
import NavBar from "../../feature/nav/NavBar";
import ActivityDashboard from "../../feature/nav/activities/dashboard/ActivityDashboard";
import { LoadingComponent } from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from 'mobx-react-lite'
import Layout from '../component/Layout'
import Loading from '../component/page/Loading'
const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    //like componentDidMount
    activityStore.loadActivities();
  }, [activityStore]); // empty array to stop useEffect

  if (activityStore.loadingInitial) return <Loading />;

  return (
    <Fragment>
      <Router>
        <Layout />
      </Router>
      {/* <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard/>
      </Container> */}
    </Fragment>
  );
};

export default observer(App);
