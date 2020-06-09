import React from "react";
import NavWrapper from "./Style/NavWrapper";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const handleTo = (to) => {
    history.push(to);
  };
  return (
    <NavWrapper>
      <h2 onClick={() => handleTo("/")}>home</h2>
      <h2 onClick={() => handleTo("/math")}>math</h2>
    </NavWrapper>
  );
};
