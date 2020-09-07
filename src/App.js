import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Cards from "./components/Cards";
import Description from "./components/Description";
import Header from "./components/Header";
import featchData from "./helper/Featch-data";
import Router from "./components/Router";

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [dropdownLikeVisible, setDropdownLikeVisible] = useState(false);
  const [dropdownBasketVisible, setDropdownBasketVisible] = useState(false);
  const [dataLikeProducts] = useState([]);
  const [dataBasketProducts] = useState([]);
  const [dataLikeProductsFilter, setDataLikeProductsFilter] = useState([]);
  const [dataBasketProductsFilter, setDataBasketProductsFilter] = useState([]);

  useEffect(() => {
    featchData(setDataProducts);
  }, []);

  const handleDropdownLikeClick = () => {
    if (dataLikeProductsFilter.length !== 0) {
      setDropdownLikeVisible(!dropdownLikeVisible);
    } else {
      setDropdownLikeVisible(false);
    }
    setDropdownBasketVisible(false);
  };

  const handleDropdownBasketClick = () => {
    if (dataBasketProductsFilter.length !== 0) {
      setDropdownBasketVisible(!dropdownBasketVisible);
    } else {
      setDropdownBasketVisible(false);
    }
    setDropdownLikeVisible(false);
  };

  const handleLikeClick = (e) => {
    if (!dataLikeProducts.includes(e.currentTarget.id)) {
      dataLikeProducts.push(e.currentTarget.id);
    } else {
      dataLikeProducts.splice(dataLikeProducts.indexOf(e.currentTarget.id), 1);
    }

    const arrLikeFilter = dataProducts.filter((itm) => {
      return dataLikeProducts.includes(String(itm.id));
    });

    if (arrLikeFilter.length === 0) {
      setDropdownLikeVisible(false);
    }

    setDataLikeProductsFilter(arrLikeFilter);
  };

  const handleBasketClick = (e) => {
    if (!dataBasketProducts.includes(e.currentTarget.id)) {
      dataBasketProducts.push(e.currentTarget.id);
    } else {
      dataBasketProducts.splice(
        dataBasketProducts.indexOf(e.currentTarget.id),
        1
      );
    }

    const arrBasketFilter = dataProducts.filter((itm) => {
      return dataBasketProducts.includes(String(itm.id));
    });

    if (arrBasketFilter.length === 0) {
      setDropdownBasketVisible(false);
    }

    setDataBasketProductsFilter(arrBasketFilter);
  };

  const handleLikeDelete = (e) => {
    dataLikeProducts.splice(dataLikeProducts.indexOf(e.currentTarget.id), 1);
    const arrRemoveLike = dataLikeProductsFilter.filter((itm) => {
      return itm.id !== Number(e.currentTarget.id);
    });
    if (arrRemoveLike.length === 0) {
      setDropdownLikeVisible(false);
    }
    setDataLikeProductsFilter(arrRemoveLike);
  };

  const handleBasketDelete = (e) => {
    dataBasketProducts.splice(
      dataBasketProducts.indexOf(e.currentTarget.id),
      1
    );
    const arrRemoveBasket = dataBasketProductsFilter.filter((itm) => {
      return itm.id !== Number(e.currentTarget.id);
    });
    if (arrRemoveBasket.length === 0) {
      setDropdownBasketVisible(false);
    }
    setDataBasketProductsFilter(arrRemoveBasket);
  };

  return (
    <BrowserRouter>
      <Header
        dropdownLikeVisible={dropdownLikeVisible}
        dropdownBasketVisible={dropdownBasketVisible}
        handlDropdownLikeClick={handleDropdownLikeClick}
        handleDropdownBasketClick={handleDropdownBasketClick}
        dataLikeProductFilter={dataLikeProductsFilter}
        dataBasketProductsFilter={dataBasketProductsFilter}
        handleLikeDelete={handleLikeDelete}
        handleBasketDelete={handleBasketDelete}
      />

      <Router
        path="/products"
        render={({ ...props }) => (
          <Cards
            {...props}
            products={dataProducts}
            likeClick={handleLikeClick}
            basketClick={handleBasketClick}
            likeProducts={dataLikeProducts}
            basketProducts={dataBasketProducts}
          />
        )}
      />

      <Router
        path="/product/:id"
        render={({ ...props }) => (
          <Description
            {...props}
            products={dataProducts}
            likeClick={handleLikeClick}
            likeProducts={dataLikeProducts}
            basketClick={handleBasketClick}
            basketProducts={dataBasketProducts}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
