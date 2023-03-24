import React from "react";

interface IAppFormProps {
  children: React.ReactNode;
  onSubmit: any;
  className: string
}

const AppForm = ({ children, onSubmit, className }: IAppFormProps) => {
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        console.log(1)
      }}
    >
      {children}
    </form>
  );
};

export default AppForm;
