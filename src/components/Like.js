import React from "react";
import "../styles/App.scss";

function Like({ id, likeClick, likeProduct }) {
  return (
    <div className="button-like">
      <button
        className={likeProduct ? "button-like__btn active" : "button-like__btn"}
        id={id}
        onClick={likeClick}
      >
        <i className="fa fa-heart-o"></i>
      </button>
    </div>
  );
}

export default Like;
