import React from "react";

function Like({ id, likeClick, likeProduct }) {
  return (
    <div className="button-like">
      <button
        className={likeProduct ? "button-like__btn active" : "button-like__btn"}
        id={id}
        onClick={() => likeClick(id)}
      >
        <i className="fa fa-heart-o"></i>
      </button>
    </div>
  );
}

export default Like;
