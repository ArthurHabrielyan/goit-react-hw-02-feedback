import { Component } from 'react';
import { Section } from './Section';
import { Buttons } from './Buttons';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { prettyDOM } from '@testing-library/react';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (good * 100) / totalFeedback;
  };

  handleButton = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <Section title={'Please leave feedback'}>
          <Buttons
            options={Object.keys(this.state)}
            handleButton={this.handleButton}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              countPositivePercantage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
