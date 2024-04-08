const ProductInfoDesc = ({ info }) => {
  return (
    <div className=" w-[700px] h-[420px] flex flex-col justify-start  text-justify">
      <p className="text-2xl font-semibold ">{info?.title}</p>
      <p className="text-2xl font-normal my-4">{info?.category}</p>
      <p className="text-lg font-light ">{info?.description}</p>
    </div>
  );
};

export default ProductInfoDesc;
