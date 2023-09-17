import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies, categories} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {part} from "@/utils"
import ProductCard from "@/components/ProductCard";
import {Product, ProductArray} from "@/types"
import BlogSection from "@/components/BlogSection";
import {bestSelling, bestFarmers} from "@/constants";



export default async function Home() {

  const obj = await part("meat-fish");
  const products = obj.items; 


  return (
    <main>
        <section className="flex my-16 ">
          <LeftMenu {...LeftMenuCategory}/>
          <div className="flex flex-wrap ">
            <RecepiesBanner {...BannerRecepies}/> 
            <RecepiesBanner {...BannerRecepies}/> 
          </div>
        </section>
         <section className="flex my-16">
          <LeftMenu {...BestSellingProducts}/>
            <div className="flex flex-wrap ">
              {products.map((p) => (
                <ProductCard p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16">
          <LeftMenu {...BestFromFarmers}/>
            <div className="flex flex-wrap ">
              {products.map((p) => (
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
