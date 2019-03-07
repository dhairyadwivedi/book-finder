import React from "react";

const BookCard = props => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.image} alt="" />
        <div className="info">
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
          <p>{props.pages} Pages</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
