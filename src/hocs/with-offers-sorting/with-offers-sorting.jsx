import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withOffersSorting = (Component) => {
  class WithOffersSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };

      this._handleSortingClick = this._handleSortingClick.bind(this);
    }

    _handleSortingClick() {
      this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    render() {
      const {isOpen} = this.state;

      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onSortingItemClick={this._handleSortingClick}
        />
      );
    }
  }

  WithOffersSorting.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSortingItemClick: PropTypes.func.isRequired,
  };

  return WithOffersSorting;
};

export default withOffersSorting;
