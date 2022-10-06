//this below package is used for generating new unique id for each of our new feedback
import {v4 as uuidv4} from "uuid";
import { createContext, useState } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=> {

    // eslint-disable-next-line no-unused-vars
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text : "This is from context",
            rating : 10,
        }
    ])

    const addFeedback = (newFeedback) => {
        //below code is used to create new id and assign it to the new feedback
          newFeedback.id = uuidv4();
          //pushing the newfeedback into our feedback variable
          //here we are copying our old feedback items by fetching them by using ... operator
          //and adding them our newfeedback
          setFeedback([newFeedback, ...feedback]);
      };

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure?"))
        {
          setFeedback(feedback.filter((item)=> item.id !==id))
        }
      }

    return (
            <FeedbackContext.Provider 
                value = {{ feedback, deleteFeedback,addFeedback,}}
            >
                {children}
            </FeedbackContext.Provider>
            )
};

export default FeedbackContext;