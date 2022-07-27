import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    //*here we use conditional styling to change the color and backgroung color of the card
    <div className={`card ${reverse && "reverse"}`}>{children}</div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
