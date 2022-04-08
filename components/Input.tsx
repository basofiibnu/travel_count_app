import React, { ChangeEvent } from 'react';

interface InputType {
  type: string;
  placeholder: string;
  className: string;
  value: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
}

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  required,
  icon,
}: InputType) => {
  return (
    <label>
      <div className="flex w-full flex-row items-center gap-3 rounded-md border border-gray-300 py-4 px-6 transition-all duration-150 ease-in-out hover:border-gray-400 focus:border-gray-400">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </label>
  );
};

export default Input;
