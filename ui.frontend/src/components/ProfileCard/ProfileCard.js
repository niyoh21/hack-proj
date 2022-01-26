import React, { useState } from "react";
import { Avatar, Container, Button, TextField } from "@mui/material";
import Cat from "../../images/cat1.jpg";
import { MapTo } from "@adobe/aem-react-editable-components";
require("./ProfileCard.css");
export const ProfileCardEditConfig = {
  emptyLabel: "profilecard",

  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

const employee = {
  name: "Niyoh Edwyn A. Villanueva",
  role: "Application Development Associate",
};

const ProfileCard = (props) => {
  let descTarget = "";
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState("Description Placeholder");

  const handleDesc = (e) => {
    descTarget = e.target.value;
  };

  const confirmDesc = () => {
    setDesc(descTarget);
    setIsEdit(false);
  };

  const EditMode = () => {
    return (
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        defaultValue={desc}
        onChange={(e) => handleDesc(e)}
      />
    );
  };

  return (
    <div class="container-main">
      <div class="container-info-1">
        <Avatar
          src={props.src}
          sx={{ width: 250, height: 250, mt: 1, mb: 1 }}
        />
        <p class="txt-name">
          <b>{employee.name}</b>
        </p>
      </div>
      <hr noshade></hr>
      <div class="container-info-2">
        {/* <p style={{ fontSize: '20px' }}><b>Name: </b> {employee.name}</p> */}
        <p style={{ fontSize: "16px" }}>
          <b>Role: </b> {employee.role}
        </p>
        <p style={{ fontSize: "16px" }}>
          <b>Org/Group: </b> Placeholder
        </p>
        <p style={{ fontSize: "16px" }}>
          <b>Personalized Description About Work: </b> {desc}
        </p>
        <div class="container-info-3">
          <Button
            id="btn-confirm"
            variant="outlined"
            onClick={isEdit ? () => confirmDesc() : () => setIsEdit(!isEdit)}
          >
            {isEdit ? "CONFIRM" : "EDIT"}
          </Button>
          {isEdit ? EditMode() : null}
        </div>
      </div>
    </div>
  );
};

MapTo("hack-proj/components/profilecard")(ProfileCard, ProfileCardEditConfig);
export default ProfileCard;
