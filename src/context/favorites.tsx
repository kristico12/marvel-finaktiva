import React, { createContext, useState, FC } from 'react';
import { nameFavoritesLocalStorage } from '@utils/constants';
import { ResultAttr } from '@services/types/types';

export type FavoritesContextState = {
  favoritesList: ResultAttr[];
  updateFavorites: (item: ResultAttr[]) => void;
};
const initialValue: ResultAttr[] = [];
const item = window.localStorage.getItem(nameFavoritesLocalStorage);
const InitialState = item ? JSON.parse(item) : initialValue;

const contextDefaultValues: FavoritesContextState = {
  favoritesList: InitialState,
  updateFavorites: () => {}
};

export const FavoritesContext = createContext<FavoritesContextState>(
  contextDefaultValues
);

const FavoritesProvider: FC = ({ children }): React.ReactElement => {
  const [todos, setTodos] = useState<ResultAttr[]>(contextDefaultValues.favoritesList);

  const updateFavorites = (item: ResultAttr[]) => {
    window.localStorage.setItem(nameFavoritesLocalStorage, JSON.stringify(item));
    setTodos([...item]);
  };

  return (
    <FavoritesContext.Provider
      value={{favoritesList: todos, updateFavorites: updateFavorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
