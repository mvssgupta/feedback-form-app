import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {motion , AnimatePresence} from "framer-motion"
// import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function feedbackList() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0) {
        return <p>No feedBack</p>
    }

//by using motion and animate , here we created a faded effect while deletion 
//and while creating a new feedback.
    return (
        <div className="feedback-list">
        <AnimatePresence>
          {
              feedback.map((item) => (
              <motion.div 
                key={item.id}
                initial = {{opacity:0}}
                animate = {{opacity:1}}
                exit = {{opacity:0}}
              >
                <FeedbackItem
                key={item.id} 
                item={item} 
                ></FeedbackItem>
              </motion.div>
          ))}
        </AnimatePresence>
        </div>
        )

//this code is with out animation.
//   return (
//   <div className="feedback-list">
//     {
//         feedback.map((item) => (
//         <FeedbackItem
//          key={item.id} 
//          item={item} 
//          handleDelete={handleDelete}
//          ></FeedbackItem>
//     ))}
//   </div>
//   )
}


export default feedbackList