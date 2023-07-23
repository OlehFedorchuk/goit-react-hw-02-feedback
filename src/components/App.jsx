import { Component } from "react";
import Statistics from "../components/Statistics";
import FeedbackOptions from "../components/FeedbackOptions";
import Section from "../components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  neutralClick = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  badClick = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ["Good", "Neutral", "Bad"];

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={(option) => {
              if (option === "Good") {
                this.goodClick();
              } else if (option === "Neutral") {
                this.neutralClick();
              } else if (option === "Bad") {
                this.badClick();
              }
            }}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;