import React from "react";
import { SocialNetwork } from "./App";
import ReactDOM from "react-dom";
import { mutationobserver } from "mutationobserver-shim";

it("Render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
