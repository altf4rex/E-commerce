import Navigation from "@/components/Navigation";
import { getProduct } from "@/utils";
import {Product} from "@/types"
import Image from "next/image";
import SelectFormat from "@/components/Select";
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import Options from "@/components/Options";

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
          <div>
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
          <div className="flex justify-between items-center ml-8 mt-4 px-6 py-4 border rounded-2xl border-primaryBg">
            <div>
              <p className="text-pop text-2xl text-secondary">{p.price}USD</p>
              {p.discountPrice !== p.price && <p className="text-pop text-base line-through text-primaryLight">{p.discountPrice}USD</p>}
            </div>
            <SelectFormat/>
            <Button startDecorator={<Add />} style={{ backgroundColor: '#6A983C' }}>Add to cart</Button>
          </div>
          <div>
            <Options/>
          </div>
         </div>
        </main>
      </>
    )
  }
