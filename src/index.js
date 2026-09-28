export function unflattenObject(input, options = {}) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) throw new TypeError("Expected input to be an object");
  const { delimiter = "." } = options;
  if (typeof delimiter !== "string" || delimiter.length === 0) throw new TypeError("Expected delimiter to be a non-empty string");
  const root = {};
  for (const [flatKey, value] of Object.entries(input)) {
    const parts = flatKey.split(delimiter);
    let current = root;
    for (let i=0;i<parts.length;i++) {
      const key = parts[i];
      const last = i === parts.length - 1;
      const nextIsIndex = !last && /^\d+$/u.test(parts[i+1]);
      if (last) current[key] = value;
      else {
        if (!(key in current)) current[key] = nextIsIndex ? [] : {};
        current = current[key];
      }
    }
  }
  return root;
}
