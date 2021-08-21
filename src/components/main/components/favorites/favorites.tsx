import { favouritesIcon } from '@assets/icons/index';
import { FavoritesProps } from './types';

const Favorites = ({
  expandSidebar,
  setExpandSideBar,
}: FavoritesProps): React.ReactElement => {
  return (
    <div className='flex flex-col w-full bg-gray-200 h-full transition-all duration-300 border-none z-10'>
      <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
        <ul className='flex flex-col py-4 space-y-1 justify-center items-center'>
          <li
            className={`flex ${expandSidebar ? 'justify-evenly' : 'justify-center'} items-center gap-1 cursor-pointer`}
            onClick={() => setExpandSideBar(!expandSidebar)}
          >
            <picture
              className='w-6 h-6'
            >
              <img
                src={favouritesIcon}
                alt='favoritesIcon'
              />
            </picture>
            {
              expandSidebar && (
                <span
                  className='text-black font-bold'
                >My favourites</span>
              )
            }
          </li>
          <li>
            <a href='#' className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6'>
              <span className='inline-flex justify-center items-center ml-4'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path></svg>
              </span>
              <span className='ml-2 text-sm tracking-wide truncate'>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
