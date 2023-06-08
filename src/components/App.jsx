import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const OPTIONS = ['good', 'neutral', 'bad'];

export { App };

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const option = evt.target.id;

    if (option === 'good') {
      setGood(state => state + 1);
    }
    if (option === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (option === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return '0';
    }
    return ((good * 100) / total).toFixed();
  };

  return (
    <Section title="Please, leave your feedback">
      <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Section>
  );
}
