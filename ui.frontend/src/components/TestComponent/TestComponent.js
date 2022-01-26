import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
require("./TestComponent.css");

const LinearProgressWithLabel = (props) => {
  return (
    <div>
      <h4>{props.labelText}</h4>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
};

const TestComponent = (props) => {
  return (
    <div>
      <Box>
        <LinearProgressWithLabel
          sx={{ ...props.sx }}
          value={props.value}
          labelText={props.label}
        />
      </Box>
    </div>
  );
};

export default TestComponent;
