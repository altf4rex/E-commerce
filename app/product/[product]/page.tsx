import { getProduct } from "@/utils";
import Options from "@/components/Options";
import ButtonAddCart from "@/components/ButtonAddCart";
import Rating from '@mui/material/Rating';
import Image from "next/image";


 export default async function Page({params}:{params: { product: string }}){
   
    const {product} = params;
    const prod = (await getProduct({product:`${product}`})) || { items: []};
    const p = prod[0];
    const imageUrl = `https://ecom-branch.pockethost.io/api/files/products/${p.id}/${p.img}`;
    return (
      <>
        <main className="flex flex-wrap">
          <Image
          className="w-[500px] h-[100%] rounded-2xl object-contain"
          src={imageUrl}
          alt='product'
          width={569}
          height={350}
          />
          <div>
          <div className="ml-8 mt-2 max-w-[550px] max-xl:ml-2">
            <h1 className="text-pop text-3xl text-primary max-xl:text-xl max-xl:mt-6">{p.name}</h1>
            <Rating name="read-only" value={Number(`${p.rating}`)} readOnly className="max-xl:mt-2"/>
            <p className="my-10 text-sans text-lg text-primary max-xl:my-5 max-sm:my-2 max-sm:text-base">{p.fullDescription}</p>
            <div className="flex justify-between flex-wrap max-sm:mt-4">
              <div className="flex mr-2">
                <div className="flex flex-col mr-10 text-sans text-base text-gray-400 max-sm:mr-9 max-sm:mb-4">
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
                <div className="flex flex-col mr-10 text-sans text-base text-gray-400 max-sm:mr-2">
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
          <div className="flex justify-between items-center ml-8 mt-8 px-8 py-4 border rounded-2xl border-primaryBg max-xl:px-6 max-xl:ml-2 max-sm:ml-0 max-sm:mt-2 max-sm:px-4 max-sm:px-2">
            <div>
              <p className="text-pop text-2xl text-secondary max-xl:text-xl">{p.price}USD</p>
              {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight max-xl:text-sm">{p.discountPrice}USD</p>}
            </div>
            <ButtonAddCart product={p}/>
          </div>
          <div>
            <Options origins={p.origins} recipe={p.recipe} rating={p.rating}/>
          </div>
         </div>
        </main>
      </>
    )
  }
