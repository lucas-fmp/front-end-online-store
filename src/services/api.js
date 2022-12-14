export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(QUERY) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const data = await response.json();
  return data;
}

export async function getItemFromId(PRODUCT_ID) {
  const response = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const data = await response.json();
  return data;
}
