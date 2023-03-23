import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IButtonProps {
  children: React.ReactNode;
  variant: string;
  disabled?: boolean;
  loading?: boolean;
  hidden?: boolean;
  onClick?: any;
  size: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  children,
  variant,
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

  const getButtonStyles = () => {
    return ``;
  };

  return (
    <button
      hidden={hidden}
      disabled={disabled}
      title="button"
      type="button"
      onClick={!loading && !disabled ? onClick : null}
      className={`
            w-36 h-10 p-4 bg-brand text-white flex justify-center items-center rounded-md space-x-1 
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
