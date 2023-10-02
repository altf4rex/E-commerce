import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {getProduct} from "@/utils"
import ProductCard from "@/components/ProductCard";
import BlogSection from "@/components/BlogSection";

export default async function Home() {

  const bestSelling = (await getProduct({category: "bakery"})) || { items: []};
  const bestFarmers = (await getProduct({category: "fruit-vegetables"})) || { items: []};
  

  return (
    <main>
        <section className="flex my-16 max-xl:flex-col max-xl:my-8 max-sm:my-2">
          <div className="flex max-xl:hidden">
            <LeftMenu {...LeftMenuCategory}/>
          </div>
          <div className="scr flex overflow-auto max-xl:hidden">
            <RecepiesBanner key={1} {...BannerRecepies}/> 
            <RecepiesBanner key={2} {...BannerRecepies}/> 
          </div>
        </section>
         <section className="flex my-16 max-xl:flex-col max-xl:my-4">
          <LeftMenu {...BestSellingProducts}/>
            <div className="scr flex overflow-auto">
              {bestSelling.slice(0, 3).map((p) => (
                <ProductCard key={p.id} p={p}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16 max-xl:flex-col max-xl:my-4">
          <LeftMenu {...BestFromFarmers}/>
            <div className="scr flex overflow-auto">
              {bestFarmers.slice(-3).map((p) => (
                <ProductCard key={p.id} p={p}/>
              ))} 
            </div>
        </section>
        <BlogSection />
    </main> 
  )
}
