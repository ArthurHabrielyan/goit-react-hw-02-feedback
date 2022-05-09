import style from './Statistics.module.css';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, totalFeedback, countPositivePercantage } =
      this.props;
    return (
      <ul className={style.statistic__list}>
        <li className={style.statistic__item}>Good: {good}</li>
        <li className={style.statistic__item}>Neutral: {neutral}</li>
        <li className={style.statistic__item}>Good: {bad}</li>
        <li className={style.statistic__item}>Total: {totalFeedback}</li>
        <li className={style.statistic__item}>
          Percantage:{' '}
          {countPositivePercantage ? countPositivePercantage.toFixed(2) : 0} %
        </li>
      </ul>
    );
  }
}
