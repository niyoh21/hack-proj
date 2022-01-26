import React from "react";

import { Grid, Box, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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
            <StarIcon /> <p>PLACEHOLDER TXT</p>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div class="ue-main-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Strengths:</h3>
        </Grid>
        <Grid item xs={12}>
          <TestComponent label="Maglaro" value={69} sx={{ height: 20 }} />
        </Grid>
        <Grid item xs={12}>
          <TestComponent label="Kumain" value={40} sx={{ height: 20 }} />
        </Grid>
        <Grid item xs={12}>
          <TestComponent label="Humilata" value={100} sx={{ height: 20 }} />
        </Grid>
        <Grid item xs={12}>
          <h3>Seminars Attended:</h3>
        </Grid>
        {displaySem()}
      </Grid>
    </div>
  );
};

MapTo("hack-proj/components/userexperience")(UserExperience);
export default UserExperience;
