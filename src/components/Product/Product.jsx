import { Link } from "react-router-dom";

const Product = ({data}) => {
  return (
      <Link to={`product/${data.id}`} target="_blank">
        <div className="h-96 border-4 p-4 border-blue-900 rounded-xl flex justify-center items-center flex-col">
            <p className="text-xl mb-2">{data.title}</p>
            <img className="w-32 m-auto " src={data.image} alt="" />
        </div>
      </Link>
  );
};

export default Product;
