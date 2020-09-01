import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import ellipse from "./image/ellipse.png";
import "./App.scss";
import Card from "./components/Card";
import Description from "./components/Description";
import Dropdown from "./components/Dropdown";

function App() {
  const [data, setData] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://gist.githubusercontent.com/ytkonaft/73e288815f259f054e7108731418333d/raw/d4a6a692ecfa3a3afe29559e3677df57fc114414/test.json"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // const arr = [];

  // const handleLikeClick = (e) => {
  //   arr.push(e.currentTarget.id);
  //   console.log(arr);
  //   setDataFilter(
  //     data.filter((itm) => {
  //       if (arr.includes(String(itm.id))) {
  //         console.log(arr, itm);
  //         return itm;
  //       }
  //     })
  //   );
  // };

  const arr = [];

  const handleLikeClick = (e) => {
    console.log(e.currentTarget.id);
    arr.push(e.currentTarget.id);
    console.log(arr);
    data.filter((itm) => {
      if (arr.includes(String(itm.id))) {
        console.log(arr, itm);
        setDataFilter([itm]);
        return itm;
      }
    });
  };

  return (
    <div>
      <header className="header">
        <div className="header__logo-wrap">
          <div className="header__logo">
            <img src={ellipse} alt="logo" />
          </div>
          <h3 className="header__logo-title">STUFF</h3>
        </div>
        <div>
          <NavLink className="header__link-wrap" to="/products">
            Products
          </NavLink>
        </div>
        <div className="header__nav">
          <div className="header__nav-wrap">
            <button
              className={
                dropdownVisible
                  ? "header__image-like active"
                  : "header__image-like"
              }
              onClick={handleDropdownClick}
            >
              <i className="fa fa-heart-o"></i>
            </button>
            <Dropdown dropdownVisible={dropdownVisible} data={dataFilter} />
          </div>
          <div className="header__nav-wrap">
            <button className="header__image-like">
              <i className="fa fa-shopping-basket"></i>
            </button>
          </div>
        </div>
      </header>
      <Route
        path="/products"
        exact
        render={() => <Card products={data} likeClick={handleLikeClick} />}
      />

      {data.map((itm) => {
        // console.log(arr[ind]);
        return (
          <Route
            path={`/product${itm.id}`}
            exact
            render={() => <Description products={[itm]} />}
            key={itm.id}
          />
        );
      })}
    </div>
  );
}

export default App;
