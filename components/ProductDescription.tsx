
const ProductDescription = ({origins, recipe}: {origins: string, recipe: string}) => {
  return (
    <div>
        <div className="mb-8">
            <h4 className="text-pop text-base text-primary">Origins</h4>
            <p className="text-sans text-sm text-primary">{origins}</p> 
        </div>
        <div className="mb-8">
            <h4 className="text-pop text-base text-primary">Recipe</h4>
            <p className="text-sans text-sm text-primary">{recipe}</p> 
        </div>
       
    </div>
  )
}

export default ProductDescription