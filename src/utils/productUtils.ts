import products from './products'; // Importe seus dados de produtos

// Filtra produtos por nome ou categoria
export function searchProducts(query: string, category?: string) {
  return products.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase()) ||
                         product.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category ? product.category === category : true;

    return matchesQuery && matchesCategory;
  });
}

// Filtra produtos por faixa de preço
export function filterByPrice(minPrice: number, maxPrice: number) {
  return products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
}
