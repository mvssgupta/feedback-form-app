import React from "react";
// import {useState} from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimesCircle } from "react-icons/fa"
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {

  const {deleteFeedback} = useContext(FeedbackContext);

  //*the below values are hard coded , we have to make it dynamic
  // const [rating, setRating] = useState(9)
  // const [text, setText] = useState("This is an example component of feedBack item component")

  //*we can create a click event and trigger this function when ever it was clicked
  // const useClick = () => {
  //   //*here we are the previous value and returning it by incrementing by 1
  //   setRating((prev)=>{
  //     return prev+1;
  //   });
  //   setText("text changed");
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimesCircle color="red"></FaTimesCircle>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick = {useClick}>Click Me</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired,
}

export default FeedbackItem;
