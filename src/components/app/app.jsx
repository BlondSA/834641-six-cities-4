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
      activeCardId: null,
      activeOffer: null,
    };

    this.handleOfferTitleClick = this.handleOfferTitleClick.bind(this);
  }

  handleOfferTitleClick(offer) {
    this.setState({activeOffer: offer});
  }

  _renderMain() {
    const {offers} = this.props;
    if (this.state.activeOffer === null) {
      return (
        <Main offers={offers} onOfferTitleClick={this.handleOfferTitleClick} />
      );
    } else {
      return <OfferDetails offer={this.state.activeOffer} />;
    }
  }

  _renderOffer() {
    const {offers} = this.props;
    if (offers.length > 0) {
      return <OfferDetails offer={offers[0]} />;
    }
    return <h1>no data</h1>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/offer-details">
            {this._renderOffer()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
};
