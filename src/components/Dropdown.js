import React, { Fragment, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import Product from "./Product";

const DropdownTrigger = (Component, { onClick }) => (props) => (
  <Component {...props} onClick={onClick} />
);

const DropdownBody = ({ children, onOutsideClick }) => {
  const dropdown = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (!dropdown.current) return;

    if (!dropdown.current.contains(e.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);

    return function removeListenerLike() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="like-dropdown" ref={dropdown}>
      {children}
    </div>
  );
};

function Dropdown({
  data,
  productDelete,
  dropdownTrigger,
  dropdownVisible,
  dropdown,
  favorites,
  ...rest
}) {
  // const [dropdownVisible, setDropdownVisible] = useState(false);

  const DropdownTriggerEl = DropdownTrigger(dropdownTrigger, {
    onClick: () => {
      dropdownVisible();
    },
  });

  return (
    <Fragment>
      <DropdownTriggerEl {...rest} />

      {dropdown && (
        <DropdownBody onOutsideClick={() => dropdownVisible()}>
          <div>
            {favorites.length !== 0 ? (
              favorites.map((itm, ind) => {
                return (
                  <Product data={itm} productDelete={productDelete} key={ind} />
                );
              })
            ) : (
              <div>Список пуст</div>
            )}
          </div>
        </DropdownBody>
      )}
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dropdownVisible: () => {
    dispatch(actions.dropdownVisible());
  },
});

const mapStateToProps = ({ dropdown, favorites }) => ({
  dropdown,
  favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
