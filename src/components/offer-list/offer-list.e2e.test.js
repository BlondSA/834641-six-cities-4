import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferList from "./offer-list.jsx";
import {offers} from "../../mocks/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});


describe(`OfferList e2e test`, () => {
  it(`handleCardHover should offer list state id`, () => {
    const offerList = shallow(
        <OfferList
          offers = {offers}
          onCardEnter = {() => {}}
          onOfferTitleClick = {() => {}}
        />
    );
    offers.forEach((offer) => {
      const id = offer.id;
      offerList.instance().handleCardEnter(id);
      expect(offerList.state(`activeCard`)).toEqual(id);
    });
  });
});
