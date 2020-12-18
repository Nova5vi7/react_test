import axios from "axios";
import { PRODUCTS_URL } from "../constant/common";

const fetchData = async (setData) => {
  const result = await axios(PRODUCTS_URL);
  setData(result.data);
};

export default fetchData;
