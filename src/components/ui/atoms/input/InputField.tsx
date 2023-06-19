import React, { ForwardRefExoticComponent, HTMLInputTypeAttribute, HTMLProps, ReactElement, Ref, RefAttributes, forwardRef } from "react";

export type InputFieldProps = Omit<HTMLProps<HTMLInputElement>, 'ref'> & {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  leftElement?: ReactElement;
}

const InputField: ForwardRefExoticComponent<InputFieldProps & RefAttributes<HTMLInputElement>> = forwardRef(({ type, placeholder, leftElement, ...otherProps }: InputFieldProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-0 mt-3 ml-4">
        {leftElement}
      </div>
      <input ref={ref} type={type} placeholder={placeholder} className="w-full h-10 pl-12 rounded-full text-sm focus:outline-none border border-b-1" {...otherProps} />
    </div>
  );
});

export default InputField;