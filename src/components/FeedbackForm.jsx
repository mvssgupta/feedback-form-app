import React from 'react'
import { useState , useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import SelectRating from './SelectRating'
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text,setText] = useState("");
    const [rating,setRating] = useState(10);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [msg,setMsg] = useState("");
    const [buttonName,setButtonName] = useState("Rate");

    const {addFeedback,feedbackEdit,updatedFeedback} = useContext(FeedbackContext);

    useEffect ( ()=> {
       if(feedbackEdit.edit === true) {
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
        setButtonName("Update");
    }
    },[feedbackEdit]);


    const handleTextChange = (e) => {
        if(e.target.value ==="")
        {
            setBtnDisabled(true);
            setMsg(null);
        }
        else if(e.target.value !=="" && e.target.value.trim().length<=10)
        {
            setMsg("Text must be atleast 10 characters")
            setBtnDisabled(true);
        }
        else{
            setMsg(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length >10) {
            const newFeedback = {
                //here we can write text:text,rating : rating but 
                //the following way is a shortcut
                text,
                rating,
            }
            if(feedbackEdit.edit === true)
            {
                updatedFeedback(feedbackEdit.item.id,newFeedback);
            }
            else {
                addFeedback(newFeedback);
            }
            setText("");
            setButtonName("Rate");
            setBtnDisabled(true);
        }
    };

  return (
    <Card>
        <form onSubmit = {handleSubmit}>
            <h2>How would you rate us?</h2>
            {/* implemented select rating component */}
            <SelectRating select = {(rating) => setRating(rating)}></SelectRating>
            <div className="input-group">
                <input 
                    onChange={handleTextChange}  
                    type="text"
                    placeholder = "Write your review" 
                    value={text}
                />
                <Button type="submit" version="secondary" isDisabled = {btnDisabled}>{buttonName}</Button>
            </div>

         {msg && <div className="message">{msg}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm