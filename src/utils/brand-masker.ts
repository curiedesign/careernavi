export interface BrandMap {
  [brandName: string]: string;
}

export interface MaskOptions {
  employers?: BrandMap;
  clients?: BrandMap;
  products?: BrandMap;
}

function escapeRegex(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function applyMap(input: string, map: BrandMap | undefined): string {
  if (!map) return input;
  let output = input;
  // Sort by length descending so longer names (e.g., "Data Cloud") match before shorter substrings
  const names = Object.keys(map).sort((a, b) => b.length - a.length);
  for (const name of names) {
    const pattern = new RegExp(`\\b${escapeRegex(name)}\\b`, 'gi');
    output = output.replace(pattern, map[name]);
  }
  return output;
}

export function maskBrands(input: string, options: MaskOptions = {}): string {
  if (!input) return input;
  let output = input;
  output = applyMap(output, options.employers);
  output = applyMap(output, options.clients);
  output = applyMap(output, options.products);
  return output;
}
