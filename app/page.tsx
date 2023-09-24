import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies, categories} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {part} from "@/utils"
import ProductCard from "@/components/ProductCard";
import {Product, ProductArray} from "@/types"
import BlogSection from "@/components/BlogSection";
import {bestSelling, bestFarmers} from "@/constants";
import CategoryMenu from "@/components/CategoryMenu";



export default async function Home() {

  const bestSelling = await part("bakery");
  const bestSellingProducts = bestSelling.items; 

  const bestFarmers = await part("fruit-vegetables");
  const bestFarmersProducts = bestFarmers.items; 


  return (
    <main>
        <section className="flex my-16 max-xl:flex-col max-xl:my-8 max-sm:my-2">
          <div className="flex max-xl:hidden">
            <LeftMenu {...LeftMenuCategory}/>
          </div>
          <div className="scr flex overflow-auto max-xl:hidden">
            <RecepiesBanner {...BannerRecepies}/> 
            <RecepiesBanner {...BannerRecepies}/> 
          </div>
        </section>
         <section className="flex my-16 max-xl:flex-col max-xl:my-4">
          <LeftMenu {...BestSellingProducts}/>
            <div className="scr flex overflow-auto">
              {bestSellingProducts.map((p) => (
                <ProductCard p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16 max-xl:flex-col max-xl:my-4">
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
