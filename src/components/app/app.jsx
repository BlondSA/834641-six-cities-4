import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const logoLinkButtonHandler = () => {};

const App = (props) => {
  const {offersCount, offersNames} = props;

  return (
    <Main
      offersCount={offersCount}
      offersNames={offersNames}
      onLogoLinkButtonClick={logoLinkButtonHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
