const orderComicsOptions = [
  { value: 'name', label: 'Name' },
  { value: 'modified', label: 'Modified' },
  { value: '-name', label: 'Name Desc' },
  { value: '-modified', label: 'Modified Desc' },
];
const nameFavoritesLocalStorage = 'comics-favorites';

export {
  orderComicsOptions,
  nameFavoritesLocalStorage
}