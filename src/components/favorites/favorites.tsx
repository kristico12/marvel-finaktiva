import { forwardRef, MutableRefObject, useContext } from 'react';
import { favouritesIcon } from '@assets/icons/index';
import { FavoritesProps } from './types';
import useViewport from '@hoocks/viewPort';
import CardFavorite from '@components/cardFavorite/cardFavorite';
import { FavoritesContext } from '@context/favorites';

const Favorites = forwardRef<HTMLElement, FavoritesProps>((props: FavoritesProps, ref): React.ReactElement => {
  const {
    expandSidebar,
    setExpandSideBar,
  } = props;
  const { favoritesList } = useContext(FavoritesContext);
  const { widthScreen } = useViewport();

  return (
    <div
      className={
        `${expandSidebar && 'fixed right-0 top-0'} flex flex-col w-3/4 bg-gray-200 h-full transition-all duration-300 border-none z-10 tablet:w-full`
      }
      ref={ref as MutableRefObject<HTMLDivElement>}
    >
      <div className='overflow-x-hidden overflow-y-auto flex flex-col justify-between'>
        <div
          className='flex justify-center mt-2 items-center gap-x-1 cursor-pointer tablet:cursor-auto'
          onClick={() => {
            if (widthScreen < 640) setExpandSideBar(!expandSidebar)
          }}
        >
          <picture
            className='w-6 h-6'
          >
            <img
              src={favouritesIcon}
              alt='favoritesIcon'
            />
          </picture>
          <span
            className='text-black font-bold text-2xl tablet:text-lg'
          >My favourites</span>
        </div>
        <ul className='flex flex-col justify-center items-center gap-y-6 mt-6 mb-5'>
          {
            favoritesList.map((item) => (
              <li
                key={`list-favorite-${item.id}`}
              >
                <CardFavorite
                  item={item}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
});

export default Favorites;
