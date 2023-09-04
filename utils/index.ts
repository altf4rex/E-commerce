

export async function fetchProducts(category?: string) {
    
    const response = await fetch(`https://64f38e22edfa0459f6c6ab1c.mockapi.io/products?category=${category}`);
    const result = await response.json();
    return result
}
