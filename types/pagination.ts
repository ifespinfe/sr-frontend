export interface MetaData {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
export interface LinkMetaData {
  prev: string | null;
  next: string | null;
  first: string | null;
  last: string | null;
}

export type Pagination<T, N extends string = "data"> = {
  [K in N]: T[];
} & {
  links: LinkMetaData;
  meta_data: MetaData;
};
