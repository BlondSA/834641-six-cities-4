import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";
import { offers } from "../../mocks/offers.js";
import { OfferClassName } from "../../const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardE2eTest`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const offerCard = shallow(
      <OfferCard
        offer={offers[0]}
        onOfferTitleClick={onOfferTitleClick}
        onOfferCardHover={() => {}}
        className={OfferClassName.MAIN[1]}
      />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick).toHaveBeenCalledTimes(0);
  });
});
