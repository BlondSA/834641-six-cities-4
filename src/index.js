import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";

const offersCount = 312;

ReactDom.render(
    <App
      offersCount = {offersCount}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
