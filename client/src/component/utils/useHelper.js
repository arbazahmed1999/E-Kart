export function filterProduct(searchInput, Product) {
  console.log(Product);
  console.log(searchInput);
  const filterProducts = Product?.filter((product) =>
    product?.title?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterProducts;
}
