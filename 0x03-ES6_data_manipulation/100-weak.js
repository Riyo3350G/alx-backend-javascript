export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let nuberOfCalls = 0;
  if (weakMap.get(endpoint)) nuberOfCalls = weakMap.get(endpoint);
  weakMap.set(endpoint, nuberOfCalls + 1);
  if (nuberOfCalls + 1 >= 5) throw new Error('Endpoint load is high');
}
