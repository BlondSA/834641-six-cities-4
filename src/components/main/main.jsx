import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list.jsx";
import {OFFER_TYPES, MapClassName, OfferClassName} from "../../const.js";
import CityMap from "../city-map/city-map.jsx";
import CityList from "../city-list/city-list.jsx";

const Main = (props) => {
  const {activeCity, offersByCity} = props;

  const offersCount = offersByCity.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} place{offersCount <= 1 ? `` : `s`} to stay in{` `}
                {activeCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
                {/* <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}
              </form>
              <OfferList
                offersByCity={offersByCity}
                className={OfferClassName.MAIN}
              />
            </section>
            <div className="cities__right-section">
              <CityMap
                offersByCity={offersByCity}
                className={MapClassName.MAIN}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offersByCity: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.shape({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        id: PropTypes.number.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              comment: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired,
              rating: PropTypes.number.isRequired,
              user: PropTypes.shape({
                avatarUrl: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                isPro: PropTypes.bool.isRequired,
                name: PropTypes.string.isRequired,
              }).isRequired,
            })
        ).isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(OFFER_TYPES).isRequired,
      })
  ).isRequired,
};

export default Main;
