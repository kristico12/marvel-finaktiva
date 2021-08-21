import { useForm, SubmitHandler } from 'react-hook-form';
import { InputsForms, HeaderProps } from './types';
import { marvelPNG } from '@assets/img/index';
import Input from '@components/input/input';

const Header = ({
  submit,
}:HeaderProps ):React.ReactElement => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InputsForms>();
  const onSubmit: SubmitHandler<InputsForms> = data => {
    submit(data);
    reset();
  };
  return (
    <div
      className='h-20 w-full bg-black flex items-center justify-evenly shadow laptop:grid laptop:grid-cols-12 laptop:gap-x-10'
    > 
      <picture
        className='max-h-full w-24 tablet:w-40 laptop:w-full laptop:col-span-3 laptop:flex laptop:justify-end laptop:items-center'
      >
        <img
          src={marvelPNG}
          alt='marvel-logo'
        />
      </picture>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-auto tablet:w-96 laptop:col-span-7 laptop:w-full'
      >
        <Input
          showError={false}
          type='search'
          register={register}
          label={{
            label: '',
            name: 'search'
          }}
          placeholder='Search character...'
          rules={{
            required: { message: '', value: true },
          }}
          errors={errors}
        />
      </form>
    </div>
  );
}

export default Header;
