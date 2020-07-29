import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../mocks/offers.js';
import ReviewsItem from './reviews-item.jsx';

describe(`ReviewsItem_snapchots`, () => {
  it(`with_data`, () => {
    const tree = renderer
      .create(<ReviewsItem review={offers[0].reviews[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
