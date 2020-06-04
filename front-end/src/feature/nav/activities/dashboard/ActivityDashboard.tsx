import React, { SyntheticEvent, useContext } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList  from "./ActivityList";
import ActivityDetail  from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import ActivityStore from '../../../../app/stores/activityStore'
import '../style/list-activity.scss'
const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore
  return (
    <Grid className={'list-activity'}>
      <GridColumn width={10}>
        <ActivityList/>
      </GridColumn>
      <GridColumn width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetail/>
        )}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity!}
          />
        )}
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard)
