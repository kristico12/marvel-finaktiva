import { SelectProps } from './types';
import { ErrorMessage } from '@hookform/error-message';

const Select = ({
  name,
  register,
  rules = undefined,
  errors = undefined,
  showError = true,
  placeholder = '',
  options,
}: SelectProps): React.ReactElement => (
  <div className='w-full h-full'>
    <select
      placeholder={placeholder}
      className='w-full border p-1'
      {
      ...register(
        name,
        {
          ...rules
        }
      )
      }
    >
      <option value=''>Select...</option>
      {
        options.map(op => (
          <option
            key={op.value}
            value={op.value}
          >{op.label}</option>
        ))
      }
    </select>
    {
      showError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className='text-red-600'>{message}</p>}
        />
      )
    }
    </div>
  );

export default Select;