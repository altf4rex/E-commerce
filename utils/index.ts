import {PageProps} from "@/types"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');




export async function full() {
    try {
        return await pb.collection('products').getFullList({
            sort: '-created',
        });
    } catch (error) {
      console.error(`Произошла ошибка:`, error);
    }
}


export async function part(params: string) {
  
    try {
        return await pb.collection('products').getList(1, 3, ({
          filter: `category="${params}"`,
      }))
    } catch (error) {
      console.error(`Произошла ошибка:`, error);
    }
}
