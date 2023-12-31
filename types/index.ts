export interface LeftMenuProps{
    header: string;
    array: string[];
    slug: string[];
    button: string;
    link: string,
}

export interface RecepiesBanner{
    baner: string;
    header: string;
    link: string;
}

export interface ProductCardProps{
    name?: string;
    category?: string;
    discountPrice?: string;
    price?: string;
    description?: string;
    slug?:string;
}

export interface Product {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated?: string;
    name: string;
    slug: string;
    description?: string;
    rating?: string;
    reviewCount?: number;
    fullDescription?: string;
    discountPrice?: number;
    price: number;
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
    img?: string;
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

export type bestFarmersTypes = {
    title: string;
    img: string;
}[]
