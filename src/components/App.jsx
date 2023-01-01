import React, {Component} from 'react';
import Statistics from './Statistics/Statistics';


export class App extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = (button) => {
        this.setState(prevState => ({
            [button]: prevState[button] + 1,
        }));
    };

         
     render() {
      const { good, neutral, bad } = this.state;
        return(
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}/>)
        
     }
}

