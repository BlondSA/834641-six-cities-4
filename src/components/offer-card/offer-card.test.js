import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offer = {
  id: 1,
  src: `img/apartment-01.jpg`,
  price: 120,
  rating: 4,
  title: `Beautiful &amp; luxurious apartment at great location`,
  type: `Apartment`,
  isInBookmark: false,
  isPremium: true,
};

describe(`Testing <OfferCard/>`, () => {
  it(`OffersCard rendered correctly`, () => {
    const tree = renderer
      .create(
          <OfferCard
            offer={offer}
            onOfferTitleClick={() => {}}
            onCardHover={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
