import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies, categories} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {part} from "@/utils"
import ProductCard from "@/components/ProductCard";
import {Product, ProductArray} from "@/types"
import BlogSection from "@/components/BlogSection";
import {bestSelling, bestFarmers} from "@/constants";



export default async function Home() {

  const bestSelling = await part("bakery");
  const bestSellingProducts = bestSelling.items; 

  const bestFarmers = await part("fruit-vegetables");
  const bestFarmersProducts = bestFarmers.items; 


  return (
    <main>
        <section className="flex my-16 max-xl:flex-col">
          <LeftMenu {...LeftMenuCategory}/>
          <div className="scr flex overflow-auto">
            <RecepiesBanner {...BannerRecepies}/> 
            <RecepiesBanner {...BannerRecepies}/> 
          </div>
        </section>
         <section className="flex my-16 max-xl:flex-col">
          <LeftMenu {...BestSellingProducts}/>
            <div className="scr flex overflow-auto">
              {bestSellingProducts.map((p) => (
                <ProductCard p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16 max-xl:flex-col">
          <LeftMenu {...BestFromFarmers}/>
            <div className="scr flex overflow-auto">
              {bestFarmersProducts.map((p) => (
                <ProductCard p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <BlogSection />
    </main> 
  )
}
