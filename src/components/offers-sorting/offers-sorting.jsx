import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SORTING_ITEMS} from "../../const.js";

const OffersSorting = (props) => {
  const {sortingType, isOpen, onSortingItemClick, onSortingClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={onSortingClick}
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
          isOpen ? `places__options--opened` : ``
        }`}
      >
        {SORTING_ITEMS.map((item) => (
          <li
            key={item}
            onClick={() => {
              onSortingItemClick(item);
              onSortingClick();
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
};

OffersSorting.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSortingClick: PropTypes.func.isRequired,
  onSortingItemClick: PropTypes.func.isRequired,
  sortingType: PropTypes.oneOf(SORTING_ITEMS).isRequired,
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
