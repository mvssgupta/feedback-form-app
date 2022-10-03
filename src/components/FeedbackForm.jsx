import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

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
                <Button type="submit">Rate</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm