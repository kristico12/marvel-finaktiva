import { ComicsAttr } from '@services/comics';
type MainProps = {
  Comics: ComicsAttr;
  onChangeOrder: (change: InputsForms) => void;
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified',
};
type InputsForms = {
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified',
};

export type { MainProps, InputsForms as IputsFromsMain };