import React from "react";
import  PropTypes  from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.PropTypes.number.isRequired,
  neutral: PropTypes.PropTypes.number.isRequired,
  bad: PropTypes.PropTypes.number.isRequired,
  total: PropTypes.PropTypes.number.isRequired,
  positivePercentage:PropTypes.number.isRequired,
}
export default Statistics;

