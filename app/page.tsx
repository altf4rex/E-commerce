import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {getProductsByCategory} from "@/utils"
import ProductCard from "@/components/ProductCard";
import BlogSection from "@/components/BlogSection";

export default async function Home() {

  const bestSelling = await getProductsByCategory("bakery")
  const bestFarmers = await getProductsByCategory("fruit-vegetables");


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
              {bestSelling.map((p) => (
                <ProductCard p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16 max-xl:flex-col max-xl:my-4">
          <LeftMenu {...BestFromFarmers}/>
            <div className="scr flex overflow-auto">
              {bestFarmers.map((p) => (
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
