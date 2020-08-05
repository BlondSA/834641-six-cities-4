import React from "react";
import renderer from "react-test-renderer";

import {cities} from "../../mocks/cities.js";

import {CityList} from "./city-list.jsx";

describe(`CitiesList_snapchots`, () => {
  it(`with_data`, () => {
    const tree = renderer
      .create(
          <CityList
            cities={cities}
            activeCity={cities[0]}
            onCityNameClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
