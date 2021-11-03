import { InputHTMLAttributes, FunctionComponent } from 'react';

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange(value: boolean): void;
}

export const Checkbox: FunctionComponent<IProps> = ({ onChange }) => {
  return <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />;
};
