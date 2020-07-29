import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import OfferDetails from "../offer-details/offer-details.jsx";
import {PLACE_TYPES} from "../../const.js";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
  }

  handleOfferTitleClick(offer) {
    this.setState({activeOffer: offer});
  }

  _renderMain() {
    const {offers} = this.props;
    const {activeOffer} = this.state;

    if (this.state.activeOffer === null) {
      return (
        <Main
          offers={offers}
          onOfferTitleClick={this.handleOfferTitleClick} />
      );
    }
    return this._renderOffer(activeOffer);
  }

  _renderOffer(offer) {
    const {offers, reviews} = this.props;
    if (offers.length === 0) {
      return <h1>no data</h1>;
    }
    return (
      <OfferDetails
        offer={offer}
        reviews={reviews}
        offers={offers.slice(0, 3)}
        onOfferTitleClick={this.handleOfferTitleClick}
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/offer-details">
            {this._renderOffer(offers[0])}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number.isRequired,
        descriptionOffer: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
        features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        hostName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isHostPro: PropTypes.bool.isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        srcHostAvatar: PropTypes.string.isRequired,
        srcImageOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired,
      })
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        userAvatar: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      })
  ).isRequired,
};
