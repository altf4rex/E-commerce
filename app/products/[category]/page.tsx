import {part, full} from "@/utils"
import {Product, PageProps} from "@/types";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Filter from "@/components/Filter";
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


export async function getStaticPaths() {
  const products = await pb.collection('products').getFullList({
        sort: '-created',
    });
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}


  export default async function Page({ products }){

    console.log(products)
    
    return (
      <>
      <div>fdjsf</div>
        <Navigation />
         <main> 
          {/* <Filter /> 
          {products.map((p: Product) => (
            <ProductCard {...p} />
          ))} */}
        </main>
      </>
    )
  }

  // export async function getStaticProps() {
  //   const products = await pb.collection('products').getFullList({
  //     sort: '-created',
  // });
  
  //   return {
  //     props: {
  //       products,
  //     },
  //   }
  // }