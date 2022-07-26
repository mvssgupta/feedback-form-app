import React from "react";
import {useState} from "react";
function FeedbackItem() {
  const [rating, setRating] = useState(9)
  const [text, setText] = useState("This is an example component of feedBack item component")

  //*we can create a click event and trigger this function when ever it was clicked
  const useClick = () => {
    setRating((prev)=>{
      return prev+1;
    });
    setText("text changed");
  }

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick = {useClick}>Click Me</button>
    </div>
  );
}

export default FeedbackItem;
