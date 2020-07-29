import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offers} from "../../mocks/offers.js";
import {reviews} from "../../mocks/reviews.js";

describe(`Testing <App/>`, () => {
  it(`App component correctly show <Main/>`, () => {
    const tree = renderer
      .create(<App offers={offers} reviews={reviews} />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`without_data`, () => {
    const tree = renderer
      .create(<App offers={[]} reviews={[]} />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
