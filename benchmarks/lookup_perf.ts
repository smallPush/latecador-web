import { products, productItemsMap, type ProductItem } from '../src/data/products';

// Linear search implementation (the "bad" code)
const getProductDetailsLinear = (variantId: string): ProductItem | undefined => {
  for (const product of products) {
    const variant = product.items.find(item => item.id === variantId);
    if (variant) return variant;
  }
  return undefined;
};

// Map lookup implementation (the "good" code)
const getProductDetailsMap = (variantId: string): ProductItem | undefined => {
  return productItemsMap.get(variantId);
};

// Benchmark function
function benchmark() {
  const iterations = 1_000_000;
  // Get a list of all variant IDs to ensure we are hitting the map
  const variantIds = products.flatMap(p => p.items.map(i => i.id));

  if (variantIds.length === 0) {
    console.log("No products found to benchmark!");
    return;
  }

  // Warmup
  for (let i = 0; i < 1000; i++) {
    const id = variantIds[i % variantIds.length];
    getProductDetailsLinear(id);
    getProductDetailsMap(id);
  }

  // Measure Linear Search
  const startLinear = performance.now();
  for (let i = 0; i < iterations; i++) {
    const id = variantIds[i % variantIds.length];
    getProductDetailsLinear(id);
  }
  const endLinear = performance.now();
  const timeLinear = endLinear - startLinear;

  // Measure Map Lookup
  const startMap = performance.now();
  for (let i = 0; i < iterations; i++) {
    const id = variantIds[i % variantIds.length];
    getProductDetailsMap(id);
  }
  const endMap = performance.now();
  const timeMap = endMap - startMap;

  console.log(`Benchmark Results (${iterations.toLocaleString()} iterations):`);
  console.log(`Linear Search Time: ${timeLinear.toFixed(2)} ms`);
  console.log(`Map Lookup Time:    ${timeMap.toFixed(2)} ms`);
  console.log(`Speedup:            x${(timeLinear / timeMap).toFixed(2)}`);

  if (timeMap < timeLinear) {
      console.log("SUCCESS: Map lookup is faster.");
  } else {
      console.log("WARNING: Map lookup is NOT faster (unexpected for large datasets).");
  }
}

benchmark();
