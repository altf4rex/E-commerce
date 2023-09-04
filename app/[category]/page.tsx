import {fetchProducts} from "@/utils";
import {Product} from "@/types";
import ProductCard from "@/components/ProductCard";

// import { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }




export async function generateStaticParams() {
  const products = await fetchProducts()

  return products.map((product: Product) => ({
    category: product.category,
  }))
}

// async function getPost(params) {
//   const products = await fetchProducts(params.category)
//   return products
// }

  export default async  function Page({ params }: { params: { category: string }} ) {
    const products = await fetchProducts(params.category);
    
    return (
      <div>
        {products.map((p: Product) => (
          <ProductCard {...p} />
        ))}
      </div>
    )
  }

