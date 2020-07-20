import React from "react";
import PropTypes from "prop-types";
import {MAX_STARS, PLACE_TYPES} from "../../const.js";

const OfferCard = (props) => {
  const {offer, onOfferTitleClick, onOfferCardHover} = props;
  const {
    id,
    srcImageOffer,
    rating,
    price,
    title,
    type,
    isInBookmark,
    isPremium,
  } = offer;

  const srcPreviewImageOffer = srcImageOffer[0];

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onOfferCardHover(offer)}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ``
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={srcPreviewImageOffer}
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
            <span
              style={{width: `${(Math.round(rating) / MAX_STARS) * 100}%`}}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name"
          onClick={(evt) => {
            evt.preventDefault();
            onOfferTitleClick(offer);
          }}
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
    srcImageOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isInBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(PLACE_TYPES).isRequired,
  }).isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired
};

export default OfferCard;
