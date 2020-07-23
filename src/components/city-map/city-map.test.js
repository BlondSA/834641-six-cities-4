import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from './city-map.jsx';
import {offers} from '../../mocks/offers.js';

describe(`Testing <CityMap/>`, () => {
  it(`<CityMap/> have rendered correctly show data`, () => {
    const tree = renderer
      .create(<CityMap offers={offers} city={`Amsterdam`} />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`without_data`, () => {
    const tree = renderer
      .create(<CityMap offers={[]} city={`Amsterdam`} />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
