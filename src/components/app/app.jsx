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
        <Main offers={offers} onOfferTitleClick={this.handleOfferTitleClick} />
      );
    }
    return this._renderOffer(activeOffer);
  }

  _renderOffer(offer) {
    const {offers} = this.props;
    if (offers.length === 0) {
      return <h1>no data</h1>;
    }
    return (
      <OfferDetails
        offer={offer}
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
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        id: PropTypes.number.isRequired,
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
              }).isRequired,
            })).isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired,
      })
  ).isRequired,
};
