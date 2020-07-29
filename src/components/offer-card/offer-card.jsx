import React from "react";
import PropTypes from "prop-types";
import {PLACE_TYPES, PlaceClassName} from "../../const.js";
import {getRatingInStars} from "../../utils/common.js";


const OfferCard = (props) => {
  const {className, offer, onOfferTitleClick} = props;
  const {
    id,
    isInBookmark,
    isPremium,
    price,
    rating,
    title,
    type,
    previewImage,
  } = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    onOfferTitleClick(offer);
  };

  const ratingStars = getRatingInStars(rating);

  return (
    <article
      className={`${className} place-card`}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ``
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isInBookmark
                ? `place-card__bookmark-button place-card__bookmark-button--active button`
                : `place-card__bookmark-button button`
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
          onClick={onClick}
        >
          <a href="#" data-id={id}>
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isInBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(PLACE_TYPES).isRequired,
  }).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  className: PropTypes.oneOf(
      Object.values(PlaceClassName).map((name) => name[1])
  ).isRequired,
};

export default OfferCard;
