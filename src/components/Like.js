import React from "react";
import "../App.scss";

function Like({ id, likeClick }) {
  return (
    <div>
      <button className="button-like" id={id} onClick={likeClick}>
        <i className="fa fa-heart-o"></i>
      </button>
    </div>
  );
}

export default Like;
