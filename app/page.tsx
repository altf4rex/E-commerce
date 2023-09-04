import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies, categories} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import {fetchProducts} from "@/utils"
import ProductCard from "@/components/ProductCard";
import {Product} from "@/types"
import BlogSection from "@/components/BlogSection";
export default async function Home() {

 
  const bestSelling  = await fetchProducts("Fruit and vegetables");
  const bestFromFarmers  = await fetchProducts("Meat and fish");
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
              {bestSelling.slice(0, 3).map((b: Product) => (
                <ProductCard {...b}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <section className="flex my-16">
          <LeftMenu {...BestFromFarmers}/>
            <div className="flex flex-wrap ">
              {bestFromFarmers.slice(0, 3).map((b: Product) => (
                <ProductCard {...b}/>
              ))} 
            </div>
          <div>
          </div>
        </section>
        <BlogSection />
    </main> 
  )
}
