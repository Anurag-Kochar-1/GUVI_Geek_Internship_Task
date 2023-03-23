import React from "react";

interface ITextFieldProps {
  type: string;
  placeholder: string;
  title?: string;
  name: string;
  required?: boolean;
  label: string;
  value?: string | number;
  onChange?: any;
  error?: string | undefined;
  registerRef?: any;
}

const TextField = ({
  type,
  label,
  required,
  placeholder,
  value,
  onChange,
  error,
  registerRef,
  name,
}: ITextFieldProps) => {
  const getInputStyles = () => {
    return `
        w-full h-12 ${
          error ? "bg-brand" : "bg-white"
        } border-2 border-v rounded-md placeholder:text-black text-black p-2 outline-brand font-medium
        `;
  };

  return (
    <div
      className="w-full flex flex-col items-start justify-start space-y-1"
      onClick={() => null}
    >
      <label htmlFor="textFeild" className="font-semibold text-base">
        {label}
        {required && <span className="text-brand"> * </span>}
      </label>
      <input
        required={required}
        type={type}
        title={"textFeild"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${getInputStyles()}`}
        // {...registerRef(`${name}`, { required: true })}
      />

      {error && <p className="text-brandError"> {error} </p>}
    </div>
  );
};

export default TextField;
