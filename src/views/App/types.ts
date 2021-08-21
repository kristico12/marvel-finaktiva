type FiltersAttr = {
  search: string;
  limit: number;
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified';
  offset: number;
};

export type { FiltersAttr };