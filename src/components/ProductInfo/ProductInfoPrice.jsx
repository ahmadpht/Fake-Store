const ProductInfoPrice = ({info}) => {
  return (
    <div className="flex flex-col justify-between items-center border w-96 h-[400px] p-6 rounded-lg bg-secondary ">
        <p className="my-4 text-2xl text-red-500">Comment : <span className="">{info.rating?.count}</span></p>
        <p className="text-2xl text-blue-500">Rating : <span>{info.rating?.rate}</span></p>
        <p className="my-2 text-3xl text-green-600">Price : <span>{info?.price}$</span></p>
        <button className="bg-red-600 w-full h-12 rounded-lg text-3xl text-white active:scale-95">Buy</button>
    </div>
  )
}

export default ProductInfoPrice
