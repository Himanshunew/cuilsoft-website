export const SolidButton = ({
  title,
  onClick,
  className,
  hoverText,
  wrapperClass,
  disabled
}) => {
  return (
    <div
      className={`solidBtnOuter align-center expanded text-center solidBtn relative z-[1] ${wrapperClass}`}
    >
      <button disabled={disabled}
        onClick={onClick}
        data-hover={hoverText}
        className="font-bold transition-all duration-700 overflow-hidden p-0 w-full md:w-auto"
      >
        <span
          className={`block px-8 py-[18px] bg-secondary text-white leading-5 border-2 border-secondary ${className}`}
        >
          {title}
        </span>
      </button>
    </div>
  );
};
