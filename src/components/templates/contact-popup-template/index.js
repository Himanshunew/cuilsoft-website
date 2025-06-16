import { useEffect, useRef, useState } from "react";
import { CommonModal } from "../../molecules/custom-modal";
import { Country } from "country-state-city";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useForm } from "react-hook-form";
import Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { OutlineButton } from "../../atoms/buttons/outline-button";

// Schema for form validation
// const schema = Yup.object({
//   phone: Yup.string()
//     .matches(/^\d{10}$/, "Phone number must be 10 digits")
//     .required("Phone number is required"),
// }).required();

export const ContactPopup = () => {
  const [show, setShow] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleAction = (accept) => {
    localStorage.setItem("contact", accept);
    setShow(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const onSubmit = (data) => {
    console.log("Form data:", data);
    handleAction("false");
  };

  useEffect(() => {
    const contactShow = localStorage.getItem("contact");
    if (!contactShow) {
      setShow(true);
    }

    const countries = Country?.getAllCountries();
    const formattedCountries = countries?.map((country) => ({
      value: country.isoCode,
      label: `(${country.name}) ${country.flag}`,
      image: country.flag,
    }));
    console.log(formattedCountries, ">>>formattedCountries");

    setCountryOptions(formattedCountries);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countryOptions.filter((country) =>
    country.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchQuery("");
    setIsDropdownOpen(false);
    setValue("country", country.label);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="contact-section text-white">
      {show && (
        <CommonModal isOpen={true} width={"780px"}>
          <div className="contact-banner p-5 text-white relative">
            <p className="lg:text-3xl font-bold  capitalize  text-2xl mt-0 text-center">
              <span className="text-secondary"> Wait!</span> Looking for Right
              Technology Partner For Your Business Growth?
            </p>
            <h5 className="text-center text-30 leading-10 my-5 text-white">
              It's Time To Convert Your Business Idea Into Success!
            </h5>

            <h6 className=" my-6 text-white">
              Get Free Consultation From Top Industry Experts:
            </h6>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-4">
                <div className="d-flex gap-3">
                  <label className="text-secondary">Select Code</label>
                  <div className="relative w-[200px] " ref={dropdownRef}>
                    <div
                      className="flex justify-between items-center gap-3 border-b bg-transparent pl-0 p-3 w-full cursor-pointer border-gray-300"
                      onClick={handleDropdownClick}
                    >
                      <div className="text-white flex line-clamp-1 ">
                        {selectedCountry ? selectedCountry.label : "India (IN)"}
                      </div>
                      <MdOutlineKeyboardArrowDown
                        size={22}
                        className="text-gray-400"
                      />
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-1 bg-black border border-gray-300 rounded-md shadow-lg !z-50 ">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          placeholder="Search country..."
                          className="w-full p-2 border-b border-gray-300 rounded-t-md text-white bg-black"
                        />
                        <ul className="max-h-40 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <li
                                key={country.value}
                                onClick={() => handleCountrySelect(country)}
                                className="p-2 cursor-pointer hover:bg-gray-500 hover:text-secondary"
                              >
                                {country.label}
                              </li>
                            ))
                          ) : (
                            <li className="p-1 text-gray-500">
                              No countries found
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-secondary">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="text"
                    placeholder="Enter your phone number"
                    className=" border-gray-300 flex justify-between items-center border-b bg-transparent pl-0 p-3 w-full cursor-pointer focus:outline-none placeholder:text-gray-400"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-start mt-10 gap-6">
                <SolidButton
                  className="uppercase"
                  wrapperClass="mb-5 md:mb-0"
                  title="Submit"
                  hoverText="Submit"
                />

                <OutlineButton
                  className="uppercase font-bold hover:text-white hover:border-white"
                  title="Cancel"
                  onClick={() => handleAction("false")}
                />
              </div>
            </form>
          </div>
          <div className="absolute -right-[158px] top-[30%]">
            <img src="/images/chai2.png" width={550} height={50} alt={"girl"} />
          </div>
        </CommonModal>
      )}
    </div>
  );
};
