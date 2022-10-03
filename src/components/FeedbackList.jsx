import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function feedbackList({feedback , handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedBack</p>
    }

  return (
  <div className="feedback-list">
    {
        feedback.map((item) => (
        <FeedbackItem
         key={item.id} 
         item={item} 
         handleDelete={handleDelete}
         ></FeedbackItem>
    ))}
  </div>
  )
}

feedbackList.propTypes = {
    //* we can set it to array
    // feedback : PropTypes.array, 

    //* Or to be more specific we can do as below
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired,
        })
    )
}

export default feedbackList