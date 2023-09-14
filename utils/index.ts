import {PageProps} from "@/types"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');




export async function getProduct(category?: string, subcategory?: string, rating?: string, priceRange?: string) {
  try {
    let filter = "";
    const filters = [];

    if (category) {
      filters.push(`categorySlug="${category}"`);
    }

    if (subcategory) {
      let sub = subcategory[0].toLocaleUpperCase() + subcategory.slice(1);
      filters.push(`subcategory="${sub}"`);
    }

    if (rating) {
      filters.push(`rating="${rating}"`);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-');
      if (minPrice && maxPrice) {
        filters.push(`price >= ${minPrice} && price <= ${maxPrice}`);
      }
    }

    if (filters.length > 0) {
      filter = filters.join(" && ");
    }

    return await pb.collection('products').getFullList({
      filter,
    });
  } catch (error) {
    console.error(`Произошла ошибка:`, error);
  }
}

export async function part(prop: string) {
  
    try {
        return await pb.collection('products').getList(1, 3, ({
          filter: `categorySlug="${prop}"`,
      }))
    } catch (error) {
      console.error(`Произошла ошибка:`, error);
    }
}
