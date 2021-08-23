import { ComicsAttr } from '@services/comics';
import { FiltersAttr } from '@views/App/types';

type MainProps = {
  Comics: ComicsAttr;
  onChangeOrder: (change: InputsForms) => void;
  onChangePage: (selectedItem: { selected: number; }) => void;
  filters: FiltersAttr;
};
type InputsForms = {
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified',
};

export type { MainProps, InputsForms as IputsFromsMain };