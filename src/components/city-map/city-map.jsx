import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {OFFER_TYPES, MapClassName} from "../../const.js";
import {connect} from 'react-redux';

class CityMap extends PureComponent {
  constructor(props) {
    super(props);

    this._divRef = React.createRef();
    this._mapContainer = null;
    this._map = null;
    this._markersLayerGroup = null;
  }

  componentDidMount() {
    this._mapContainer = this._divRef.current;
    this._setMap();
    this._setMapView();
    this._setMapMarkers();
  }

  componentWillUnmount() {
    this._mapContainer.remove();
  }

  componentDidUpdate() {
    this._setMapView();
    this._markersLayerGroup.clearLayers();
    this._setMapMarkers();
    this._changeMarkerIcon();
  }

  _setMap() {
    this._map = leaflet.map(this._mapContainer, {
      zoomControl: false,
      marker: false,
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution:
            `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this._map);

    this._markersLayerGroup = leaflet.layerGroup().addTo(this._map);
  }

  _setMapView() {
    const zoom = this.props.offersByCity[0].city.location.zoom;
    const cityCoordinate = [
      this.props.offersByCity[0].city.location.latitude,
      this.props.offersByCity[0].city.location.longitude,
    ];
    this._map.setView(cityCoordinate, zoom);
  }

  _setMapMarkers() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40],
    });
    this.props.offersByCity.forEach((place) => {
      const marker = leaflet.marker(
          [place.location.latitude, place.location.longitude],
          {
            icon,
          }
      );
      marker.id = place.id;
      marker.addTo(this._markersLayerGroup);
    });
  }

  _changeMarkerIcon() {
    const {hoverCityId} = this.props;
    this._markersLayerGroup.getLayers().forEach((marker) => {
      if (marker.id === hoverCityId) {
        const newIcon = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [30, 40],
        });
        marker.setIcon(newIcon);
      }
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
  hoverCityId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
.isRequired,
};

const mapStateToProps = (state) => ({
  hoverCityId: state.hoverCityId,
});

export {CityMap};
export default connect(mapStateToProps)(CityMap);

