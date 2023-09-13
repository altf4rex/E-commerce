import {PageProps} from "@/types"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');




export async function getProduct(category?: string, subcategory?: string, rating?: string) {
    try {
      let filter = "";
    const filters = [];

    if (category) {
      filters.push(`categorySlug="${category}"`);
    }

    if (subcategory) {
      filters.push(`subcategory="${subcategory}"`);
    }

    if (rating) {
      filters.push(`rating="${rating}"`);
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
