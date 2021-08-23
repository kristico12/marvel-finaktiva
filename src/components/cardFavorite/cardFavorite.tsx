import { useContext } from "react";
import { CardFavoriteProps } from "./types";
import { btnDeleteIcon } from "@assets/icons";
import { ResultAttr } from '@services/types/types';
import { FavoritesContext } from '@context/favorites';

const CardFavorite = ({
  item
}: CardFavoriteProps): React.ReactElement => {
  const { favoritesList, updateFavorites } = useContext(FavoritesContext);
  const onDelete = (item: ResultAttr) => {
    const filterItem = favoritesList.filter((fav) => fav.id !== item.id);
    updateFavorites(filterItem);
  }
  return (
    <div
      className='relative'
    >
      <picture
        className='absolute -top-3 -right-3 cursor-pointer'
        onClick={() => onDelete(item)}
      >
        <img
          src={btnDeleteIcon}
          alt='close-modal'
        />
      </picture>
      <picture
        className='flex justify-center'
      >
        <img
          src={`${item?.thumbnail?.path}/portrait_xlarge.${item?.thumbnail.extension}`}
          alt='img-comic'
        />
      </picture>
      <div
        className='flex justify-center flex-wrap'
      >
        <h2
          className='text-black font-bold'
        >{item?.name}</h2>
      </div>
    </div>
  )
};

export default CardFavorite;
