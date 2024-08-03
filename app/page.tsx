import LeftMenu from "@/components/LeftMenu";
import {LeftMenuCategory, BestSellingProducts, BestFromFarmers, BannerRecepies} from "@/constants";
import RecepiesBanner from "@/components/RecepiesBanner";
import BlogSection from "@/components/BlogSection";
import MainPageBestFarmers from "@/components/MainPageBestFarmers";
import MainPageBestSelling from "@/components/MainPageBestSelling";

export default function Home() {

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
           <MainPageBestSelling/>
          <div>
          </div>
        </section>
        <section className="flex my-16 max-xl:flex-col max-xl:my-4">
          <LeftMenu {...BestFromFarmers}/>
          <MainPageBestFarmers />
        </section>
        <BlogSection />
    </main> 
  )
}
