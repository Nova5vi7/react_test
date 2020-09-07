import axios from "axios";
import { PRODUCT_DATA } from "../constant/common";

const fetchData = async (setData) => {
  const result = await axios(PRODUCT_DATA);
  setData(result.data);
};

export default fetchData;
