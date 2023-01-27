export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};
type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
  //   value?: SelectOption;
  //   onChange: (value: SelectOption | undefined) => void;
} & (SingleSelectProps | MultipleSelectProps);

import { XMarkIcon } from "@heroicons/react/24/solid";

const Select = ({ value, onChange, options, multiple }: SelectProps) => {
  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  return (
    <>
      <div className="my-4">
        <div
          // onBlur={() => setOpen(false)}
          tabIndex={0}
          className="flex w-full justify-between items-center p-1.5 focus:outline-blue-300"
        >
          {value ? (
            <span className="flex gap-3 flex-wrap">
              {multiple
                ? value.map((v) => (
                    <button
                      key={v.value}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        selectOption(v);
                      }}
                      className="bg-gray-100 font-medium capitalize text-xs sm:text-sm px-4 py-0.5 rounded-full cursor-pointer flex items-center gap-1"
                    >
                      {v.label}
                      <XMarkIcon className="w-3 h-3" />
                    </button>
                  ))
                : value.label}
            </span>
          ) : (
            <span className="opacity-30 cursor-default">select a tag</span>
          )}

          <button
            type="button"
            className={!value ? "hidden" : "hover:text-slate-600"}
            onClick={(e) => {
              e.stopPropagation();
              clearOptions();
            }}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="mt-2">
          <ul className="flex flex-wrap gap-3">
            {options.map((option) => (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                }}
                key={option.label}
                className={`bg-gray-100 font-medium capitalize text-xs sm:text-sm px-4 py-0.5 rounded-full cursor-pointer ${
                  isOptionSelected(option) ? "bg-blue-300" : ""
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
