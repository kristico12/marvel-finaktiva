import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MainProps, IputsFromsMain } from './types';
import Favorites from './components/favorites/favorites';
import { charactersIcon } from '@assets/icons/index';
import Select from '@components/select/select';
import { orderComicsOptions } from '@utils/constants';

const Main = ({
  Comics,
  onChangeOrder,
  orderBy
}: MainProps): React.ReactElement => {
  const [expandSidebar, setExpandSideBar] = useState<boolean>(false);
  const { register, formState: { errors }, getValues } = useForm<IputsFromsMain>({
    defaultValues: {
      orderBy,
    },
  });
  const onChange = () => {
    onChangeOrder(getValues());
  };

  return (
    <div
      className="grid grid-cols-12 h-screen"
    >
      <div
        className={`p-2 col-span-${expandSidebar ? '6' : '10'}`}
      >
        <div
          className={`flex ${expandSidebar ? 'justify-center' : 'justify-between'} items-center gap-1`}
        >
          <div
            className='flex justify-center items-center gap-1'
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
          {
            !expandSidebar && (
              <form
                className=''
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
            )
          }
        </div>
      </div>
      <div
        className={`col-span-${expandSidebar ? '6' : '2'}`}
      >
        <Favorites
          expandSidebar={expandSidebar}
          setExpandSideBar={setExpandSideBar}
        />
      </div>
    </div>
  );
}

export default Main;
