import { UseFormRegister, RegisterOptions, FieldError, DeepMap } from 'react-hook-form';

// file component
type SelectProps = {
  options: { value: string; label: string }[];
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  showError?: boolean;
  rules?: RegisterOptions;
  errors?: DeepMap<any, FieldError>
}
// file styles
type stylesState = {
  formControl: string;
  label: string;
  iconSearch?: string;
  input: string;
  error: string;
};
type stylesProps = {
  error: boolean,
  type: "text" | "password" | "date" | "time" | "number" | "datetime-local" | "search";
}

export type { SelectProps, stylesState, stylesProps };