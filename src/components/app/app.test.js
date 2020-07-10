import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offersCount = 312;
const offers = [
  {
    id: 1,
    src: `img/apartment-01.jpg`,
    price: 100,
    rating: 5,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },
  {
    id: 2,
    src: `img/apartment-02.jpg`,
    price: 220,
    rating: 2,
    title: `Wood and stone place`,
    type: `Private room`,
    isInBookmark: true,
    isPremium: false,
  },
  {
    id: 3,
    src: `img/apartment-03.jpg`,
    price: 333,
    rating: 2,
    title: `Huge house with fireplace`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: false,
  },
  {
    id: 4,
    src: `img/room.jpg`,
    price: 1111,
    rating: 2,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },

  {
    id: 5,
    src: `img/room.jpg`,
    price: 9,
    rating: 1,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    isInBookmark: false,
    isPremium: true,
  },
];

describe(`Testing <App/>`, () => {
  it(`App component correctly show <Main/>`, () => {
    const tree = renderer
      .create(
          <App
            offersCount={offersCount}
            offers={offers}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
