export const OutlineButton = ({ title, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outlineBtn outlineBtnWrap hoverBtn relative w-full md:w-auto inline-block bg-transparent cursor-pointer outline-none"
      >
        <span
          className={`hover:text-[#403D3D] text-secondary w-full md:w-auto border-2 border-[#403d3d] transition-all relative inline-block left-0 top-0 px-8 py-[18px] leading-5 ${className}`}
        >
          {title}
        </span>
      </button>
    </>
  );
};
