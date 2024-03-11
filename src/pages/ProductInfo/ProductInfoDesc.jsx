const ProductInfoDesc = ({info}) => {
  return (
    <div>
        <p className="text-2xl font-semibold">{info?.title}</p>
        <p className="text-2xl font-light my-4">{info?.category}</p>
        <p className="">{info?.description}</p>
    </div>
  )
}

export default ProductInfoDesc
