import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  OFFERS_COUNT: 312
};

ReactDom.render(
    <App offersCount = {Offers.OFFERS_COUNT}/>,
    document.querySelector(`#root`)
);
