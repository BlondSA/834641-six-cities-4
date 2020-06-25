import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  offersCount: 312,
  offersNames: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`,
    `Huge house with fireplace`
  ]
};

ReactDom.render(
    <App
      offersCount = {Offers.offersCount}
      offersNames = {Offers.offersNames}
    />,
    document.querySelector(`#root`)
);
