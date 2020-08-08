import React, {PureComponent} from "react";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SORTING_ITEMS} from "../../const.js";

class OffersSorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this._onSortingClick = this._onSortingClick.bind(this);
  }

  _onSortingClick() {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  }

  render() {
    const {sortingType, onSortingItemClick} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={this._onSortingClick}
          className="places__sorting-type"
          tabIndex="0"
        >
          {sortingType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${
            this.state.isOpen ? `places__options--opened` : ``
          }`}
        >
          {SORTING_ITEMS.map((item) => (
            <li
              key={item}
              onClick={() => {
                onSortingItemClick(item);
                this._onSortingClick();
              }}
              className={`places__option ${
                item === sortingType ? `places__option--active` : ``
              }`}
              tabIndex="0"
            >
              {item}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

OffersSorting.propTypes = {
  sortingType: propTypes.oneOf(SORTING_ITEMS).isRequired,
  onSortingItemClick: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingItemClick(sortingType) {
    dispatch(ActionCreator.selectSortingType(sortingType));
  },
});

export {OffersSorting};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSorting);
