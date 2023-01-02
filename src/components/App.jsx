import React, {Component} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


export class App extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = option => {
        this.setState((prevState) => ({ [option]: prevState[option] + 1}));
    };

    countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () =>
    Number.parseInt(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)

         
     render() {
      const { good, neutral, bad } = this.state;
      const options = Object.keys(this.state);
      const totalFeedback = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage(this.state) ? this.countPositiveFeedbackPercentage(this.state) : '';

        return(
        <>
            <Section title='Please leave feedback'>
            <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
            </Section>
            <Section title='Statistics'>
                {totalFeedback ?
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback}
                    positivePercentage={positivePercentage}/> :
                  <Notification message='There is no feedback'/>}
              </Section>
        </>
        )   
     }
}

