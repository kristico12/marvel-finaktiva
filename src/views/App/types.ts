type FiltersAttr = {
  search: string;
  limit: number;
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified';
};

export type { FiltersAttr };