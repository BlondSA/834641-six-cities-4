import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer = {offer}
          onOfferTitleClick = {onOfferTitleClick}
          onMouseOver = {() => {}}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick).toHaveBeenCalledTimes(1);
  });
});
