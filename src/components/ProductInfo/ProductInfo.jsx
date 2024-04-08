import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductInfoImage from "./ProductInfoImage";
import ProductInfoDesc from "./ProductInfoDesc";
import ProductInfoPrice from "./ProductInfoPrice";
import Suggestion from "../Suggestion/Suggestion";

const ProductInfo = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-[90vw] max-w-[screen] h-full my-12 pb-12 border-b flex justify-between items-center">
        <ProductInfoPrice info={productInfo} />
        <ProductInfoDesc info={productInfo} />
        <ProductInfoImage img={productInfo?.image} alt={productInfo.title} />
      </div>
      <Suggestion product={productInfo} />
    </div>
  );
};

export default ProductInfo;
