import PocketBase from 'pocketbase';

interface CommonProduct {
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

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getProduct({
  search,
  category,
  subcategory,
  rating,
  priceRange,
  product,
}: {
  search?: string;
  category?: string;
  subcategory?: string;
  rating?: string;
  priceRange?: string;
  product?: string;
}): Promise<CommonProduct[]> {
  try {
    const filters = [];
    
    if (search && search !== "undefined") {
      const searchFilter = `name ~ "${search}" || category ~ "${search}" || subcategory ~ "${search}"`;
      filters.push(`(${searchFilter})`);
    }

    if (category && category !== 'undefined') {
      filters.push(`categorySlug="${category}"`);
    }

    if (subcategory && subcategory !== 'undefined') {
      let sub = subcategory[0].toLocaleUpperCase() + subcategory.slice(1);
      filters.push(`subcategory="${sub}"`);
    }

    if (rating && rating !== 'undefined') { 
      filters.push(`rating="${rating}"`);
    }

    if (product && product !== 'undefined' ) {
      filters.push(`slug="${product}"`);
    }

    if (priceRange && priceRange !== 'undefined') {
      const [minPrice, maxPrice] = priceRange.split('-');
      if (minPrice && maxPrice) {
        filters.push(`price >= ${minPrice} && price <= ${maxPrice}`);
      }
    }

    const filter = filters.join(" && ");

    return await pb.collection('products').getFullList<CommonProduct>({
      filter,
    });
  } catch (error) {
    console.error(`Произошла ошибка:`, error);
    return []
  }
}

export async function getProductsByCategory(category: string): Promise<CommonProduct[]> {
  try {
    const result = await pb.collection('products').getList<CommonProduct>(1, 3, {
      filter: `categorySlug="${category}"`,
    });

    return result.items;
  } catch (error) {
    console.error(`Произошла ошибка:`, error);
    return [];
  }
}