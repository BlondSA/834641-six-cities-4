import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MAX_STARS = 5;

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    this.id = null;
    this._onCardHover = this._onCardHover.bind(this);
    this._onCardHoverOn = this._onCardHoverOn.bind(this);
    this._onCardHoverOff = this._onCardHoverOff.bind(this);
  }

  render() {
    const {offer, onOfferTitleClick} = this.props;
    const {id, src, rating, price, title, type, isInBookmark, isPremium} = offer;
    const ratingScale = (Math.round(rating) / MAX_STARS * 100) + `%`;

    return (
      <article id ={id} className="cities__place-card place-card" onMouseEnter = {this._onCardHoverOn} onMouseLeave = {this._onCardHoverOff}>
        {isPremium ? <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={src} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className= {isInBookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: ratingScale}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#"
              onClick = {onOfferTitleClick}
            >{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }

  _onCardHoverOn() {
    this._onCardHover(this.id);
  }

  _onCardHoverOff() {
    this._onCardHover(null);
  }

  _onCardHover() {}
}

OfferCard.propTypes = {
  offer:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isInBookmark: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
    }),
  onCardHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OfferCard;
