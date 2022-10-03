import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'

function FeedbackForm() {
    const [text,setText] = useState("");

    const handleTextChange = (e) => {
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
                <button type="submit">Rate</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm