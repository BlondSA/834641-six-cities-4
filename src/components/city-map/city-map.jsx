import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {OFFER_TYPES, MapClassName} from "../../const.js";

export default class CityMap extends PureComponent {
  constructor(props) {
    super(props);

    this._divRef = React.createRef();
  }

  componentDidMount() {
    this._getMap();
  }

  componentWillUnmount() {
    const mapContainer = this._divRef.current;
    mapContainer.remove();
  }

  componentDidUpdate() {
    this._map.remove();
    this._getMap();
  }

  _getMap() {
    const {offersByCity} = this.props;
    const mapContainer = this._divRef.current;
    const zoom = offersByCity[0].city.location.zoom;

    const cityCoordinate = [
      offersByCity[0].city.location.latitude,
      offersByCity[0].city.location.longitude,
    ];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40],
    });

    this._map = leaflet.map(mapContainer, {
      center: cityCoordinate,
      zoom,
      zoomControl: false,
      marker: false,
    });

    this._map.setView(cityCoordinate, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this._map);

    offersByCity.forEach((place) => {
      leaflet
        .marker([place.location.latitude, place.location.longitude], {
          icon,
        })
        .addTo(this._map);
    });
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`${className} map`} ref={this._divRef}></section>
    );
  }
}

CityMap.propTypes = {
  offersByCity: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.shape({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        isInBookmark: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }),
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
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(OFFER_TYPES).isRequired,
      })
  ).isRequired,
  className: PropTypes.oneOf(Object.values(MapClassName)).isRequired,
};
