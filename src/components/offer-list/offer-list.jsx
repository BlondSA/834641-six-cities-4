import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {PLACE_TYPES} from "../../const.js";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null,
      activeCard: {},
    };

    this.handleCardEnter = this.handleCardEnter.bind(this);
  }

  handleCardEnter(offer) {
    if (offer !== this.state.activeCard) {
      this.setState({
        activeCard: offer,
      });
    }
  }

  render() {
    const {offers, onOfferTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferTitleClick={onOfferTitleClick}
            onOfferCardHover={this.handleCardEnter}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        bedrooms: PropTypes.number.isRequired,
        descriptionOffer: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
        hostName: PropTypes.string.isRequired,
        isHostPro: PropTypes.bool.isRequired,
        srcHostAvatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        srcImageOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};
