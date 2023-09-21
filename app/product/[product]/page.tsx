import Navigation from "@/components/Navigation";
import { getProduct } from "@/utils";
import {Product} from "@/types"
import Options from "@/components/Options";
import ButtonAddCart from "@/components/ButtonAddCart";
import Rating from '@mui/material/Rating';
import Image from "next/image";
import toUrl from "@/utils/toUrl";

 export default async function Page(props){

    const {product} = props.params;
    const prod: Product[] = (await getProduct({product:`${product}`})) || { items: []};
    const p = prod[0];

    return (
      <>
        <Navigation />
        <main className="flex flex-wrap">
          <Image
          className="w-[500px] h-[350px] rounded-2xl rounded-2xl object-contain"
          src={toUrl(p.img, p.id)}
          alt='product'
          width={569}
          height={350}
          />
          <div>
          <div className="ml-8 mt-2 max-w-[550px]">
            <h1 className="text-pop text-3xl text-primary">{p.name}</h1>
            <Rating name="read-only" value={Number(`${p.rating}`)} readOnly />
            <p className="my-10 text-sans text-lg text-primary">{p.fullDescription}</p>
            <div className="flex justify-between flex-wrap">
              <div className="flex mr-2">
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
          <div className="flex justify-between items-center ml-8 mt-8 px-16 py-4 border rounded-2xl border-primaryBg">
            <div>
              <p className="text-pop text-2xl text-secondary">{p.price}USD</p>
              {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
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
