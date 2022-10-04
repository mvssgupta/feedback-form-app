import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text,setText] = useState("");
    const [rating,setRating] = useState(10);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [msg,setMsg] = useState("");

    const handleTextChange = (e) => {
        if(text ==="")
        {
            setBtnDisabled(true);
            setMsg(null);
        }
        else if(text !=="" && text.trim().length<=10)
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

  return (
    <Card>
        <form >
            <h2>How would you rate us?</h2>
            {/* we have to implement the select rating component here */}
            <div className="input-group">
                <input 
                    onChange={handleTextChange} 
                    type="text"
                    placeholder = "Write your review" 
                    value={text}
                />
                <Button type="submit" version="secondary" isDisabled = {btnDisabled}>Rate</Button>
            </div>

         {msg && <div className="message">{msg}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm