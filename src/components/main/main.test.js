import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offers} from "../../mocks/offers.js";

describe(`Testing <Main/>`, () => {
  it(`Main have rendered correctly`, () => {
    const tree = renderer
      .create(
          <Main
            offers={offers}
            onOfferTitleClick = {() => {}}
          />, {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`without data`, () => {
    const tree = renderer
      .create(<Main offers={[]} onOfferTitleClick = {() => {}} />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
