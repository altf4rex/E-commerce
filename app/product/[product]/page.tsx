import Navigation from "@/components/Navigation";
import { getProduct } from "@/utils";
import {Product} from "@/types"
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
 export default async function Page(props){

    const {product} = props.params;
    const prod: Product[] = (await getProduct({product:`${product}`})) || { items: []};
    const p = prod[0];

    return (
      <>
        <Navigation />
        <main className="flex">
          <div>
            <div className="w-[569px] h-[436px] my-4 rounded-2xl bg-primaryBg"></div>
            <div className="w-[569px] h-[436px] my-4 rounded-2xl bg-primaryBg"></div>
            <div className="w-[569px] h-[436px] my-4 rounded-2xl bg-primaryBg"></div>
          </div>
          <ProductDetails />
          <div>
            <div>
            <p className="text-pop text-2xl text-secondary">{p.price}USD</p>
            {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
            </div>
          </div>
        </main>
      </>
    )
  }
