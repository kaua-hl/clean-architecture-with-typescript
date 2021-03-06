export interface CacheStore<T> {
  delete: (key: string) => void;
  insert: (key: string, value: T) => void;
  replace: (key: string, value: T) => void;
}
