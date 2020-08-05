import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {PLACE_TYPES, PlaceClassName} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class OfferList extends PureComponent {
  render() {
    const {offersByCity, className, onOfferTitleClick} = this.props;
    return (
      <div className={`${className[0]} places__list tabs__content`}>
        {offersByCity.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className[1]}
            onOfferTitleClick={onOfferTitleClick}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  className: PropTypes.oneOf(Object.values(PlaceClassName)).isRequired,
  offersByCity: PropTypes.arrayOf(
      PropTypes.shape({
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        bedrooms: PropTypes.number.isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        id: PropTypes.number.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
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
        rating: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.selectActiveOffers(offer));
  },
});

export {OfferList};
export default connect(null, mapDispatchToProps)(OfferList);
