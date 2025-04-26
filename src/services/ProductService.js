const BASE_URL = "https://3.135.195.147/";

export async function getAllProducts() {
    const response = await fetch(BASE_URL + 'products/');
    return response.json();
}

export async function searchProductsByName(name) {
    const response = await fetch(BASE_URL + `products/search/name/${name}`);
    return response.json();
}

export async function searchProductsByCategory(categoryName) {
    const response = await fetch(BASE_URL + `products/search/category/${categoryName}`);
    return response.json();
}
