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
  const newReviews = reviews.slice();
  return newReviews.sort((a, b) => b.date - a.date);
};

export {
  formatCommentDateFull,
  formatCommentDateShort,
  getRatingInStars,
  getSortedReviews,
};
