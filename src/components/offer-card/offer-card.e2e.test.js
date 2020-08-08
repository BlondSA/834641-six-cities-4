import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";
import {offers} from "../../mocks/offers.js";
import {OfferClassName} from "../../const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`<OfferCard /> e2e test`, () => {
  it(`Should offer card title be pressed`, () => {
    const onOfferTitleClick = jest.fn();
    const onOfferCardHover = jest.fn();

    const offerCard = shallow(
        <OfferCard
          offer={offers[0]}
          onOfferTitleClick={onOfferTitleClick}
          onOfferCardHover={onOfferCardHover}
          className={OfferClassName.MAIN[1]}
          hoverCityId={1}
        />
    );

    const offerTitle = offerCard.find(`.place-card__name a`);

    offerTitle.simulate(`click`);
    expect(onOfferTitleClick).toHaveBeenCalledTimes(0);
  });
});
