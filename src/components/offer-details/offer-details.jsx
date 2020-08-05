import React from "react";
import PropTypes from "prop-types";
import {MapClassName, PLACE_TYPES, PlaceClassName} from "../../const.js";
import OfferList from "../offer-list/offer-list.jsx";
import CityMap from "../city-map/city-map.jsx";
import ReviewList from "../reviews-list/reviews-list.jsx";
import {getRatingInStars, foramtToCapitalize} from "../../utils/common.js";

const OfferDetails = (props) => {
  const {offer, offersByCity} = props;
  const {
    goods,
    bedrooms,
    isInBookmark = false,
    isPremium = false,
    maxAdults,
    price,
    rating,
    images,
    title,
    type,
    host,
    description,
    reviews,
  } = offer;

  const ratingInStars = getRatingInStars(rating);
  const typeCapitalize = foramtToCapitalize(type);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((offerPhoto) => {
                return (
                  <div key={offerPhoto} className="property__image-wrapper">
                    <img
                      className="property__image"
                      src={offerPhoto}
                      alt="Photo studio"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : (
                ``
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={
                    isInBookmark
                      ? `property__bookmark-button property__bookmark-button--active button`
                      : `property__bookmark-button button`
                  }
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{
                      width: ratingInStars,
                    }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {typeCapitalize}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((feature) => {
                    return (
                      <li key={feature} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      host.isPro
                        ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                        : `property__avatar-wrapper property__avatar-wrapper user__avatar-wrapper`
                    }
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                </div>
                <div className="property__description">
                  {description.map((descriptionOffer) => {
                    return (
                      <p key={descriptionOffer} className="property__text">
                        {descriptionOffer}
                      </p>
                    );
                  })}
                </div>
              </div>
              <ReviewList reviews={reviews} />
            </div>
          </div>
          <CityMap
            offersByCity={offersByCity}
            className={MapClassName.PROPERTY}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList
              offersByCity={offersByCity}
              className={PlaceClassName.PROPERTY}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferDetails.propTypes = {
  offer: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    host: PropTypes.shape({
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isInBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
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
          }),
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(PLACE_TYPES).isRequired,
  }).isRequired,
  offersByCity: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number.isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        host: PropTypes.shape({
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        }).isRequired,
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
              }),
            })
        ).isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired,
      })
  ).isRequired,
};

export default OfferDetails;
