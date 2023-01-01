import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad }) => {
    
    return (
        <div className="statistics">
           
            {/* <h1>Please leave feedback</h1>
            <button 
            type="button" 
            className="statistics__btn"
            onClick={this.handleButtonGood}
            name = "good">
            Good
            </button>
            <button 
            type="button"
            className="statistics__btn" 
            onClick={this.handleButtonNeutral}
            name = "neutral">
            Neutral</button>
            <button  
            type="button" 
            className="statistics__btn" 
            onClick={this.handleButtonBad}
            name="bad">
            Bad</button> */}
                        
            <div> 
                <h2>Statistics</h2>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
            </div>
        </div>
    )
}

Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
}

export default Statistics;