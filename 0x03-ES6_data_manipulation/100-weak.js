export const weakMap = new WeakMap();
const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const currentCalls = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, currentCalls);
  if (currentCalls >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
