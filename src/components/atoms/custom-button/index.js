import React from "react";

export const CustomButton = ({ title, variant, className, ...rest }) => {
  let btnvariant = "bg-secondary text-black p-4 border-0 rounded";
  switch (variant) {
    case "filled":
      btnvariant =
        "bg-secondary rounded-md text-black px-6 md:px-10 py-4 border border-secondary";
      break;
    case "outline":
      btnvariant =
        "bg-transparent text-secondary rounded-md border border-secondary py-4 px-6 md:px-10";
      break;
    case "dark":
      btnvariant = "bg-dark text-white font-bold py-3 md:px-14 px-6 rounded-md";
  }
  return (
    <div>
      <button className={`${btnvariant} ${className}`} type="button" {...rest}>
        {title}
      </button>
    </div>
  );
};
