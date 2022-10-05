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
    return <FeedbackContext.Provider 
                value = {{ feedback, }}
            >
                {children}
            </FeedbackContext.Provider>
};

export default FeedbackContext;