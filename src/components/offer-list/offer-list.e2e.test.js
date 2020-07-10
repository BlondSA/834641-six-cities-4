import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferList from "./offer-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  {
    id: 1,
    src: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },
  {
    id: 2,
    src: `img/apartment-02.jpg`,
    price: 80,
    rating: 4,
    title: `Wood and stone place`,
    type: `Private room`,
    isInBookmark: true,
    isPremium: false,
  },
  {
    id: 3,
    src: `img/apartment-03.jpg`,
    price: 132,
    rating: 4,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 4,
    src: `img/room.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },
];


describe(`OfferList e2e test`, () => {
  it(`handleCardHover should offer list state id`, () => {
    const offerList = shallow(
        <OfferList
          offers = {offers}
          onCardHover = {() => {}}
          onOfferTitleClick = {() => {}}
        />
    );
    offers.forEach((offer) => {
      const id = offer.id;
      offerList.instance()._handleCardHover(id);
      expect(offerList.state(`cardId`)).toEqual(id);
    });
  });
});
