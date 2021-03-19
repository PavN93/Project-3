import React from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

const SignUpCTA = () => {
  return (
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row className="signUpContainer">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header>
              Something about Plantica.
            </Header>
            <p>
              Maybe a quote about the app.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header>
              Join the community.
            </Header>
            <Button content='Sign up' icon='right arrow' labelPosition='right' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
};

export default SignUpCTA;
