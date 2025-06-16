import React from "react";

// eslint-disable-next-line react/display-name
export const InputField = React.forwardRef(
  ({ error, label, placeholder, onInput, className, errorClass, spacing, showStar, ...rest }, ref) => {
    return (
      <div className={` w-full relative ${spacing ? spacing : "mb-4"}`}>
        {label ? <span className="text-sm text-gray-25 block">{label} {showStar ? <><span className="text-red-400">*</span></> : null}</span> : null}
        <input
          className={`focus:outline-none mb-1 w-full ${className}`}
          type="text"
          placeholder={placeholder}
          {...rest}
          ref={ref}
          onInput={onInput}
        />
        {error?.message ? (
          <span className={`text-sm text-red-500 block  ${errorClass} `}>{error.message}</span>
        ) : null}
      </div>
    );
  }
);
