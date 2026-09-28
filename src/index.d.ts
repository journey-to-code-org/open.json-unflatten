export interface UnflattenOptions { delimiter?: string; }
export function unflattenObject(input: Record<string, unknown>, options?: UnflattenOptions): Record<string, unknown>;

