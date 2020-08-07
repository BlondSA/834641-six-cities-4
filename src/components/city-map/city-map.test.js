import React from "react";
import renderer from "react-test-renderer";
import {CityMap} from "./city-map.jsx";
import {offers} from "../../mocks/offers.js";
import {MapClassName} from "../../const.js";

describe(`Testing <CityMap/>`, () => {
  it(`<CityMap/> have rendered correctly show data`, () => {
    const tree = renderer
      .create(
          <CityMap
            offersByCity={offers}
            className={MapClassName.MAIN}
            hoverCityId={1}
          />,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            },
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
