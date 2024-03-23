const ProductInfoPrice = ({info}) => {
  return (
    <>
        <p className="my-2 text-3xl text-green-600">{info?.price}$</p>
        <p className="my-4 text-lg text-red-500">{info.rating?.rate}</p>
        <p className="text-lg text-blue-500">{info.rating?.count}</p>
    </>
  )
}

export default ProductInfoPrice
