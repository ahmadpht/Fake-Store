import { Link } from "react-router-dom";

const Product = ({data}) => {
  return (
      <Link to={`product/${data.id}`} target="_blank">
        <div className="h-96 w-full border-4 border-blue-900 rounded-xl flex justify-center items-center flex-col">
            <img className="w-28 m-auto" src={data.image} alt="" />
            <p className="text-l text-center m-5">{data.title}</p>
        </div>
      </Link>
  );
};

export default Product;
