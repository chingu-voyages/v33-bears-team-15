import ReactSelect, { GroupBase, Props, OptionsOrGroups } from 'react-select';

export interface ISelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  isError?: boolean;
  error?: string;
  optionsData?: OptionsOrGroups<Option, Group>;
}

export default function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: ISelect<Option, IsMulti, Group>) {
  const { error, isError, optionsData, ...rest } = props;

  return (
    <div className="relative">
      <ReactSelect options={optionsData} {...rest} />

      {isError && (
        <span
          role="alert"
          className="block text-sm dark:text-red-500 text-red-700 mt-1 pl-0.5"
        >
          {error}
        </span>
      )}
    </div>
  );
}
