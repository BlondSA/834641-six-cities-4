import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import OfferDetails from "../offer-details/offer-details.jsx";
import {PLACE_TYPES} from "../../const.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this.handleOfferTitle = this.handleOfferTitle.bind(this);
  }

  handleOfferTitle(offer) {
    this.setState({activeOffer: offer});
  }

  _renderMain() {
    if (this.state.activeOffer) {
      return (
        <OfferDetails offer={this.state.activeOffer} />
      );
    } else {
      return (
        <Main offers={this.props.offers} offersCount={this.props.offersCount} onOfferTitleClick={this.handleOfferTitle} />
      );
    }
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-details">
            <OfferDetails offer={offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
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
};

export default App;
