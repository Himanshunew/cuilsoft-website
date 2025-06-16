import { useEffect, useRef } from "react";

export function IndustryCircle({ industries, activeIndex, onSelect }) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.children;
    const angle = 360 / items.length;
    const radius = 250;

    Array.from(items).forEach((item, index) => {
      const htmlItem = item;
      const rotation = angle * index;
      const rotationInRadians = (rotation * Math.PI) / 180;

      const x = Math.sin(rotationInRadians) * radius;
      const y = -Math.cos(rotationInRadians) * radius;

      htmlItem.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, [industries.length]);

  return (
    <div ref={containerRef} className="relative  h-[550px] w-[112px] mx-auto">
      {industries.map((industry, index) => (
        <button
          key={industry.id}
          onClick={() => onSelect(index)}
          className={`
            absolute bottom-0 left-0 right-0 top-1/2 
            w-24 h-24 transition-all duration-700   
            ${activeIndex === index ? "scale-110" : "scale-100"}
          `}
        >
          <div className="text-center p-5 justify-center flex flex-col items-center gap-5">
            <div
              className={`
              w-full h-full rounded-full flex items-center justify-center
              transition-colors duration-300 transform
              ${
                activeIndex === index
                  ? "bg-[#f6b24f] text-black"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }
              shadow-lg  w-20 h-20 text-4xl
              rotate-animation-reverse
            `}
            >
              {industry.icon}
            </div>
            <div className="text-md font-semibold px-1 leading-tight">
              {industry.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
