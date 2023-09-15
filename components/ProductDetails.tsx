
const ProductDetails = ({product}) => {
  return (
    <>
        <div className="ml-8 mt-2">
            <h1 className="text-pop text-3xl text-primary">{p.name}</h1>
            {/* <Image /> */}
            <p className="my-10 text-sans text-lg text-primary">{p.fullDescription}</p>
            <div className="flex justify-between flex-wrap">
              <div className="flex">
                <div className="flex flex-col mr-10 text-sans text-base text-gray-400">
                  <p className="mb-2">SKU:</p>
                  <p className="mb-2">Category:</p>
                  <p className="mb-2">Stock:</p>
                  <p className="mb-2">Farm</p>
                </div>
                <div className="flex flex-col text-sans text-base text-primary">
                  <p className="mb-2">76645</p>
                  <p className="mb-2">{p.subcategory}</p>
                  <p className="mb-2">{p.stock}</p>
                  <p className="mb-2">{p.farm}</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col mr-10 text-sans text-base text-gray-400">
                  <p className="mb-2">Freshness:</p>
                  <p className="mb-2">Buy by:</p>
                  <p className="mb-2">Delivery:</p>
                  <p className="mb-2">Delivery area</p>
                </div>
                <div className="flex flex-col text-sans text-base text-primary">
                  <p className="mb-2">{p.freshness}</p>
                  <p className="mb-2">{p.buyBy ? p.buyBy : "pcs, kgs, box, pack"}</p>
                  <p className="mb-2">{p.delivery}</p>
                  <p className="mb-2">{p.deliveryArea}</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductDetails