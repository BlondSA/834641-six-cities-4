import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {Coordinate, PLACE_TYPES, MapClassName} from "../../const.js";

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

  _getMap() {
    const {offers, city} = this.props;

    const allOffers = offers.filter((place) => place.city.name === city);

    const mapContainer = this._divRef.current;

    let cityCoordinate = [
      Coordinate[city.toUpperCase()][0],
      Coordinate[city.toUpperCase()][1],
    ];

    let zoom = 10;

    if (allOffers.length > 0) {
      cityCoordinate = [
        allOffers[0].city.location.latitude,
        allOffers[0].city.location.longitude,
      ];
      zoom = allOffers[0].city.location.zoom;
    }

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const map = leaflet.map(mapContainer, {
      center: cityCoordinate,
      zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(cityCoordinate, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    allOffers.forEach((place) => {
      leaflet
        .marker([place.location.latitude, place.location.longitude], {icon})
        .addTo(map);
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
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.shape({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }),
          name: PropTypes.string.isRequired
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
          zoom: PropTypes.number.isRequired
        }),
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({
          comment: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          user: PropTypes.shape({
            avatarUrl: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isPro: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
          }).isRequired
        })).isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(PLACE_TYPES).isRequired
      })
  ).isRequired,
  className: PropTypes.oneOf(Object.values(MapClassName)).isRequired,
};
