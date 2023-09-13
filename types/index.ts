export interface LeftMenuProps{
    header: string;
    array: string[];
    button: string;
}

export interface RecepiesBanner{
    baner: string;
    header: string;
    link: string;
}

// export interface RequestProps{
//     category: string;
//     limit: number;
// }

export interface ProductCardProps{
    name: string;
    category: string;
    discountPrice: string;
    price: string;
    description: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    rating?: string;
    reviewCount?: number;
    fullDescription?: string;
    discountPrice: string;
    price: string;
    image?: string;
    freshness?: string;
    farm?: string;
    deliveryArea?: string;
    stock?: number;
    sku?: string;
    category: string;
    subcategory: string; 
    buyBy?: string;
    delivery?: number;
    origins?: string;
    recipe?: string;
    vitamins?: string;
    categorySlug: string;
  }

  export type ProductArray = {
    items: Product[];
  };

export type subcategoryCountProp = {
    [key: string]: number;
}

export type PageProps = {
    category?: string; 
    subcategory?: string;
    name?: string;
    discountPrice?: number | string;
    rating?: string | string;
    limit?: number;
}

