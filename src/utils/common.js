import {MAX_STARS} from "../const.js";
import moment from 'moment';

const getRatingInStars = (rating) => {
  const styleInStars = `${(Math.round(rating) / MAX_STARS) * 100}%`;
  return styleInStars;
};

const formatCommentDateShort = (date) => {
  const commentDateString = moment(date).format(`MMMM YYYY`);
  return commentDateString;
};

const formatCommentDateFull = (date) => {
  const commentDateString = moment(date).format(`YYYY-MM-DD`);
  return commentDateString;
};

const getSortedReviews = (reviews) => {
  const newReviews = [...reviews];
  return newReviews.sort((a, b) => b.date - a.date);
};

const foramtToCapitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const filterOffersByCity = (allOffers, cityName) => {
  return allOffers.filter((offer) => {
    return offer.city.name === cityName;
  });
};

const getCityList = (allOffers) => {
  const cities = [...new Set(allOffers.map((offer) => offer.city.name))];
  const citiesList = cities.slice(0, 6);
  return citiesList;
};

export {
  formatCommentDateFull,
  formatCommentDateShort,
  getRatingInStars,
  getSortedReviews,
  foramtToCapitalize,
  extend,
  filterOffersByCity,
  getCityList,
};
