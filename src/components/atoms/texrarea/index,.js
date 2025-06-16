/* eslint-disable react/display-name */
import React from "react";

export const TeaxtArea = React.forwardRef(
  ({ error, label, placeholder, ...rest }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <textarea
          className="focus:outline-none"
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
        {error?.message ? (
          <span className="text-sm text-red-500">{error.message}</span>
        ) : null}
      </div>
    );
  }
);
