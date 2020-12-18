import React from "react";

function Button({ id, basketClick, basketProduct }) {
  return (
    <div className="btn-add-wrap">
      <button
        className={basketProduct ? "button-add active" : "button-add"}
        id={id}
        onClick={() => basketClick()}
      >
        {basketProduct ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default Button;
