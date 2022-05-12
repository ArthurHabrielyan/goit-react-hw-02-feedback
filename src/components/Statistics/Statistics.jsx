import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  countPositivePercantage,
}) => {
  return (
    <ul className={style.statistic__list}>
      <li className={style.statistic__item}>Good: {good}</li>
      <li className={style.statistic__item}>Neutral: {neutral}</li>
      <li className={style.statistic__item}>Bad: {bad}</li>
      <li className={style.statistic__item}>Total: {totalFeedback}</li>
      <li className={style.statistic__item}>
        Percantage:
        {countPositivePercantage ? countPositivePercantage.toFixed(2) : 0} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  countPositivePercantage: PropTypes.func.isRequired,
};
