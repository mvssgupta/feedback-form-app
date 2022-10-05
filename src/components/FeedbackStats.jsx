//this component is used to display the number of rating and the average rating.

import React from 'react'

import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {

    
  const {feedback} = useContext(FeedbackContext);

    //calculating the average using 'reduce' higher order function
    let average = (feedback.reduce((sum,curr) => {
    return sum + curr.rating;
    },0))/feedback.length;

    // making the average to maintain a value upto 1 decimal place
    //and removing any trailling zeros if present
    //.replace is used to remove the trailling zeros by passing it a regular expression
    average= average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className = "feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats