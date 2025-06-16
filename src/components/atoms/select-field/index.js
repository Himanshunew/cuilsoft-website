import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Controller } from "react-hook-form";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = forwardRef(
  (
    {
      label,
      options,
      control,
      name,
      error,
      className,
      onChange,
      showImage = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={`relative w-full ${className}`} ref={dropdownRef}>
        <label className="text-sm leading-5 font-normal">{label}</label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange: fieldOnChange, value } }) => (
            <>
              <div
                onClick={handleToggle}
                className={`border border-[#E3E3E3] focus:border-black rounded-[12px] p-3 w-full cursor-pointer`}
              >
                <div className="text-base leading-6 font-medium tracking-[1.5%]  flex w-full justify-between items-center line-clamp-1">
                  {value || "Select an option"} <IoIosArrowDown />
                </div>
              </div>
              {isOpen && (
                <div className="absolute z-10 bg-white border border-[#E3E3E3] rounded-[12px] w-full max-h-56 overflow-y-auto cursor-pointer custom-scroll text-base">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full p-2 border-b border-[#E3E3E3] focus:outline-none"
                  />
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, id) => (
                      <div
                        key={id}
                        onClick={() => {
                          fieldOnChange(option.value);
                          if (onChange) {
                            onChange(option.value);
                          }
                          setIsOpen(false);
                        }}
                        className="p-2 flex items-center hover:bg-primary hover:text-white cursor-pointer rounded-[12px] text-base space-x-2"
                      >
                        {showImage && option.image && (
                          <Image
                            src={option.image}
                            alt={option.label}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span>{option.label}</span>
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500 text-center">
                      No options found
                    </div>
                  )}
                </div>
              )}
              {error && (
                <p className="text-[#FF3B30] text-xs absolute -bottom-5">
                  {error}
                </p>
              )}
            </>
          )}
        />
      </div>
    );
  }
);

export default CustomSelect;
