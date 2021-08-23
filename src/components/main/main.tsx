import React, { useState, createRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MainProps, IputsFromsMain } from './types';
import Favorites from '../favorites/favorites';
import { charactersIcon } from '@assets/icons/index';
import Select from '@components/select/select';
import { orderComicsOptions } from '@utils/constants';
import Card from '@components/card/card';
import { favouritesIcon } from '@assets/icons/index';
import useViewport from '@hoocks/viewPort';
import useOnClickOutside from '@hoocks/onClickOutside';

const Main = ({
  Comics,
  onChangeOrder,
  onChangePage,
  filters
}: MainProps): React.ReactElement => {
  const { widthScreen } = useViewport();
  const [expandSidebar, setExpandSideBar] = useState<boolean>(false);
  const { register, formState: { errors }, getValues } = useForm<IputsFromsMain>({
    defaultValues: {
      orderBy: filters.orderBy,
    },
  });
  const refFavoritesElement = createRef<HTMLDivElement>();
  
  const handleClickOutside = () => {
    if (expandSidebar) setExpandSideBar(false);
  }
  const onChange = () => {
    onChangeOrder(getValues());
  };

  useEffect(() => {
    if (widthScreen >= 640) {
      setExpandSideBar(false);
    }
  }, [widthScreen]);

  useOnClickOutside(refFavoritesElement, handleClickOutside);
  return (
    <div
      className="grid grid-cols-12"
    >
      <div
        className='p-2 col-span-12 tablet:col-span-9'
      >
        <div
          className='flex justify-between items-center gap-x-1'
        >
          <div
            className='flex justify-center items-center gap-x-1'
          >
            <picture>
              <img
                src={charactersIcon}
                alt='character-icon'
              />
            </picture>
            <span
              className='text-black font-bold'
            >Characters</span>
          </div>
          <form
            className='tablet:w-60 laptop:w-64'
            onChange={onChange}
          >
            <Select
              name='orderBy'
              register={register}
              showError={false}
              errors={errors}
              options={orderComicsOptions}
            />
          </form>
          {
            (widthScreen < 640) && (
              <picture
                className='w-6 h-6'
                onClick={() => setExpandSideBar(!expandSidebar)}
              >
                <img
                  src={favouritesIcon}
                  alt='favoritesIcon'
                />
              </picture>
            )
          }
        </div>
        {
          (Comics.data.total > 0) ?
            <div
              className='grid grid-cols-1 gap-2 laptop:grid-cols-2 mt-4'
            >
              {
                Comics?.data?.results?.map((com) => (
                  <Card
                    item={com}
                    key={com.id}
                  />
                ))
              }
            </div>
            : <h1>no hay datos</h1>
        }
      </div>
      <div
        className='col-span-0 tablet:col-span-3'
      >
        {
          (widthScreen >= 640) && (
            <Favorites
              expandSidebar={expandSidebar}
              setExpandSideBar={setExpandSideBar}
            />
          )
        }
      </div>
      {
        expandSidebar && (
          <Favorites
            expandSidebar={expandSidebar}
            setExpandSideBar={setExpandSideBar}
            ref={refFavoritesElement}
          />
        )
      }
    </div>
  );
}

export default Main;
