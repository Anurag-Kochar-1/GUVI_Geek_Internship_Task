import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IButtonProps {
  children: React.ReactNode;
  variant?: string;
  disabled?: boolean;
  loading?: boolean;
  hidden?: boolean;
  onClick?: any;
  size?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  children,
  variant,
  size,
  disabled,
  loading,
  hidden,
  onClick,
  leftIcon,
  rightIcon,
}: IButtonProps) => {
  const isButtonDisabled = () => {
    if (disabled) {
      return `cursor-not-allowed`;
    }
  };

  const getButtonSizes = () => {
    switch (size) {
      case "FULL":
        return `w-full h-10`;

      default:
        return `w-36 h-10`;
    }
  };

  return (
    <button
      hidden={hidden}
      disabled={disabled}
      title="button"
      type="button"
      onClick={!loading && !disabled ? onClick : null}
      className={`
            ${getButtonSizes()} p-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 text-white flex justify-center items-center rounded-lg space-x-1 
            ${isButtonDisabled()}
            `}
    >
      {!loading && leftIcon && <span> {leftIcon} </span>}
      {!loading && (
        <span className="font-libreFranklin font-normal text-base">
          {" "}
          {children}{" "}
        </span>
      )}
      {!loading && rightIcon && <span> {rightIcon} </span>}
      {loading && (
        <AiOutlineLoading3Quarters
          size={"1.2rem"}
          className="text-white animate-spin"
        />
      )}
    </button>
  );
};

export default Button;
