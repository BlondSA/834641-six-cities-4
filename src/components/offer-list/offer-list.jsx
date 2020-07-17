import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {PLACE_TYPES} from "../../const.js";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._handleCardEnter = this._handleCardEnter.bind(this);
    this._handleCardLeave = this._handleCardLeave.bind(this);
  }

  _handleCardEnter(offer) {
    this.setState({
      activeCard: offer,
    });
  }

  _handleCardLeave() {
    this.setState({
      activeCard: null,
    });
  }

  render() {
    const {offers, onOfferTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            offer={offer}
            onOfferTitleClick={onOfferTitleClick}
            onMouseEnter={this._handleCardEnter}
            onMouseLeave={this._handleCardLeave}
            key={offer.id}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        bedrooms: PropTypes.number.isRequired,
        host: PropTypes.shape({
          descriptionOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          hostName: PropTypes.string.isRequired,
          isHostPro: PropTypes.bool.isRequired,
          srcHostAvatar: PropTypes.string.isRequired
        }).isRequired,
        id: PropTypes.number.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        srcImageOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        srcPreviewImageOffer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OfferList;
