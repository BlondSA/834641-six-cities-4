import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {
  OFFER_TYPES,
  OfferClassName,
  SORTING_ITEMS,
  SortingType,
} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
class OfferList extends PureComponent {
  _sortOffersByType(offers, sortType) {
    let sortedOffers = offers.slice();
    switch (sortType) {
      case SORTING_ITEMS[1]:
        return sortedOffers.sort(
            (a, b) => a[SortingType.PRICE] - b[SortingType.PRICE]
        );
      case SORTING_ITEMS[2]:
        return sortedOffers.sort(
            (a, b) => b[SortingType.PRICE] - a[SortingType.PRICE]
        );
      case SORTING_ITEMS[3]:
        return sortedOffers.sort(
            (a, b) => b[SortingType.RATING] - a[SortingType.RATING]
        );
      default:
        return offers;
    }
  }

  render() {
    const {
      className,
      offersByCity,
      onOfferTitleClick,
      sortingType,
      onOfferCardHover,
    } = this.props;

    const sortedOffers = this._sortOffersByType(offersByCity, sortingType);

    return (
      <div className={`${className[0]} places__list tabs__content`}>
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className[1]}
            onOfferTitleClick={onOfferTitleClick}
            onOfferCardHover={onOfferCardHover}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  className: PropTypes.oneOf(Object.values(OfferClassName)).isRequired,
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
        type: PropTypes.oneOf(OFFER_TYPES).isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  sortingType: PropTypes.oneOf(SORTING_ITEMS).isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.selectActiveOffer(offer));
  },
  onOfferCardHover(offerDataId) {
    dispatch(ActionCreator.selectHoverCityId(offerDataId));
  },
});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
