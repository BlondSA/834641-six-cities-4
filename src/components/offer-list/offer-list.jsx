import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardId: null,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  _handleCardHover(id) {
    this.setState({
      cardId: id,
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
            onMouseOver={this._handleCardHover}
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
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default OfferList;
