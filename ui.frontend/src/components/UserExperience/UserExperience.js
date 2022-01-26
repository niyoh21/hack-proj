import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import TestComponent from "../TestComponent/TestComponent";
import { MapTo } from "@adobe/aem-react-editable-components";
require("./UserExperience.css");
const UserExperience = () => {
  const displaySem = () => {
    const arr = [1, 2, 3, 4, 5];
    return arr.map((x) => {
      return (
        <Grid item xs={12}>
          <div class="sem-item">
            <p>Seminar Placeholder (date)</p>
          </div>
        </Grid>
      );
    });
  };

  const displayJobDetails = () => {
    return (
      <Grid className="ue-child-grid" sx={{ padding: 2 }} container xs={12}>
        <Grid item xs={12}>
          <p class="grid-heading">Job Details:</p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="p" component="p">
            Career Level:
          </Typography>
          <Typography variant="p" component="p">
            Time Type:
          </Typography>
          <Typography variant="p" component="p">
            Location:
          </Typography>
          <Typography variant="p" component="p">
            Start Date:
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const displaySeminarsAttended = () => {
    return (
      <Grid className="ue-child-grid" sx={{ padding: 2 }} container xs={12}>
        <Grid item xs={12}>
          <p class="grid-heading">List of Seminars Attended:</p>
        </Grid>
        {displaySem()}
      </Grid>
    );
  };

  const displayTrainingProgress = () => {
    return (
      <Grid className="ue-child-grid" sx={{ padding: 2 }} container xs={12}>
        <Grid item xs={12}>
          <p class="grid-heading">Training Progress:</p>
        </Grid>
        <Grid item xs={12}>
          <TestComponent label="React JS" value={100} sx={{ height: 20 }} />
        </Grid>
        <Grid item xs={12}>
          <TestComponent label="AEM" value={40} sx={{ height: 20 }} />
        </Grid>
        <Grid item xs={12}>
          <TestComponent
            label="Python for Data Science"
            value={20}
            sx={{ height: 20 }}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <div class="ue-main-container">
      <Grid container>
        {displayJobDetails()}
        {displaySeminarsAttended()}
        {displayTrainingProgress()}
      </Grid>
    </div>
  );
};

MapTo("hack-proj/components/userexperience")(UserExperience);
export default UserExperience;
