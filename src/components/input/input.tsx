import useStyles from './styles';
import { InputProps } from './types';
import { ErrorMessage } from '@hookform/error-message';
import { iconSearch } from '@assets/icons/index';

const Input = ({
  register,
  label,
  rules = undefined,
  errors = undefined,
  type = "text",
  showError = true,
  placeholder = '',
}: InputProps): React.ReactElement => {
  const styles = useStyles(
    {
      error: errors !== undefined && label.name in errors ? true : false,
      type
    }
  );
  return (
    <div className={styles.formControl}>
      <label
        className={styles.label}
        htmlFor={label.name}
      >{label.label}
      {
        type === "search" &&
        (
          <img
            src={iconSearch}
            alt=""
            className={styles.iconSearch}
          />
        )
      }
      <input
        placeholder={placeholder}
        className={styles.input}
        id={label.name}
        type={type}
        {
          ...register(
            label.name,
            {
              ...rules
            }
          )
        }
      />
      {
        showError && (
          <ErrorMessage
            errors={errors}
            name={label.name}
            render={({ message }) => <p data-testid={`${label.name}-error`} className={styles.error}>{message}</p>}
          />
        )
      }
      </label>
    </div>
  );
}

export default Input;