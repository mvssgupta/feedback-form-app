import React from "react";
import PropTypes from "prop-types";
function HeaderComponent({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style = {headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

HeaderComponent.defaultProps = {
  text: "FeedBack App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor : "#00ff00",
};

HeaderComponent.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default HeaderComponent;
