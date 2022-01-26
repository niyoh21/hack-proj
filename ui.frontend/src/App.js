import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import TestComponent from "./components/TestComponent/TestComponent";
import UserExperience from "./components/UserExperience/UserExperience";
// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
