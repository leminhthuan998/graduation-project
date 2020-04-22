import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export const ActivityDetail = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Title</Card.Header>
        <Card.Meta>
          <span>Date</span>
        </Card.Meta>
        <Card.Description>
          Descrition
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button basic color='blue' content='Edit'/>
            <Button basic color='grey' content='Cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};