// import { Component } from "react";

// class Feedback extends Component {
//    state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }
    
//     goodClick = () => {
//         this.setState((preState) => ({good: preState.good + 1}))
//     }
//     neutralClick = () => {
//         this.setState((preState) => ({neutral: preState.neutral + 1}))
//     }

//     badClick = () => {
//         this.setState((preState) => ({bad: preState.bad + 1}))
//     }
//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state
//         const sum  = good + neutral + bad
//         return sum;
//     }

//     countPositiveFeedbackPercentage = () => {
//         const { good, neutral, bad } = this.state
//         const sum = good + neutral + bad;
//         const positivFeedback = (good / sum) * 100;
//         return positivFeedback;
//     }

//     render() {
//         const {good, neutral, bad} = this.state;
//         return <div>
//             <h3>Please leave feedback</h3>
//             <button onClick={this.goodClick}>Good</button>
//             <button onClick={this.neutralClick}>Neutral</button>
//             <button onClick={this.badClick}>Bad</button>
//             <ul>Statistics
//              <li>Good: { good }</li>
//              <li>Neutral: { neutral}</li>
//                 <li>Bad {bad}</li>
//                 <li>Total: { this.countTotalFeedback()}</li>
//                 <li>Positive feedback: { Math.round(this.countPositiveFeedbackPercentage())}%</li>
//             </ul>
//         </div>
        
//     }  

// }
// export default Feedback