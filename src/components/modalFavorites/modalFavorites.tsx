import { shoppingCartPrimaryIcon, favoriteAddedIcon, favoriteAddIcon, btnCloseIcon } from '@assets/icons/index';
import { ModalFavoritesProps } from "./types";
import useLocalStorage from '@hoocks/localStorage';
import { ResultAttr } from '@services/types/types';

const ModalFavorites = ({
  onClose,
  info
}: ModalFavoritesProps): React.ReactElement => {
  const initialDataLocalStorage: ResultAttr[] = [];
  const { storedValue: listFavorites, setValue: setListFavorites } = useLocalStorage('comics-favorites', initialDataLocalStorage);
  const isExistListFavorites = listFavorites.find((fav) => fav.id === info.id);
  return (
    <div className='fixed z-10 inset-0' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='flex items-center justify-center min-h-screen'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity filter blur-3xl' aria-hidden='true'
          onClick={onClose}
        ></div>
        <div
          className="relative grid grid-rows-6 bg-white transform transition-all w-screen max-w-xs tablet:max-w-lg laptop:max-w-4xl"
          id='containerModal'
        >
          <picture
            className='absolute top-2 right-2 cursor-pointer'
            onClick={onClose}
          >
            <img
              src={btnCloseIcon}
              alt='close-modal'
            />
          </picture>
          <div
            className='row-span-5 grid grid-cols-12 p-6 gap-4'
          >
            <div
              className='col-span-5 tablet:col-span-4'
            >
              <picture>
                <img
                  src={`${info?.thumbnail?.path}/portrait_xlarge.${info?.thumbnail.extension}`}
                  alt='img-comic'
                  className='h-full w-full'
                />
              </picture>
            </div>
            <div
              className='col-span-7 tablet:col-span-8'
            >
              <h1
                className='text-black font-bold'
              >{info?.name}</h1>
              <p
                className='flex flex-wrap text-gray-500'
              >{info?.description}</p>
            </div>
          </div>
          <div
            className='row-span-1 grid grid-cols-12'
          >
            <button
              className={
                `col-span-6
                flex justify-center px-2
                items-center tablet:gap-2 tablet:px-0
                ${isExistListFavorites ? 'bg-black' : 'bg-gray-200'}
                ${!isExistListFavorites && 'hover:opacity-80'}`
              }
              onClick={() => {if (!isExistListFavorites) setListFavorites([...listFavorites, info])}}
              disabled={isExistListFavorites ? true : false}
            >
              <picture>
                <img
                  src={isExistListFavorites ? favoriteAddedIcon : favoriteAddIcon}
                  alt='img-shopping'
                />
              </picture>
              <span
                className={`font-bold text-lg ${isExistListFavorites ? 'text-red-600' : 'text-black opacity-80'}`}
              >
                {
                  isExistListFavorites ? 'ADDED TO FAVOURITES' : 'ADD TO FAVOURITES'
                }
              </span>

            </button>
            <button
              className='col-span-6 bg-gray-300 flex justify-center items-center px-2 tablet:gap-2 tablet:px-0'
            >
              <picture>
                <img
                  src={shoppingCartPrimaryIcon}
                  alt='img-shopping'
                />
              </picture>
              <span
                className='text-red-600 font-bold text-lg'
              >BUY FOR $3.99</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFavorites;
