import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import OfferDetails from "../offer-details/offer-details.jsx";
import {OFFER_TYPES} from "../../const.js";
import {connect} from "react-redux";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {activeCity, activeOffer, offersByCity} = this.props;

    if (!activeOffer) {
      return <Main offersByCity={offersByCity} activeCity={activeCity} />;
    }
    return this._renderOffer(activeOffer);
  }

  _renderOffer(offer) {
    const {offersByCity} = this.props;
    if (offersByCity.length === 0) {
      return <h1>no data</h1>;
    }
    return (
      <OfferDetails offer={offer} offersByCity={offersByCity.slice(0, 3)} />
    );
  }

  render() {
    const {offersByCity} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/offer-details">
            {this._renderOffer(offersByCity[0])}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffer: PropTypes.oneOfType([
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
          })
      ).isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.oneOf(OFFER_TYPES).isRequired,
    }).isRequired,
    PropTypes.bool,
  ]),
  offersByCity: PropTypes.arrayOf(
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
            })
        ).isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(OFFER_TYPES).isRequired,
      })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeOffer: state.activeOffer,
  offers: state.offers,
  offersByCity: state.offersByCity,
});

export {App};
export default connect(mapStateToProps)(App);
