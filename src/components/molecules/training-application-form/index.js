import React from "react";
import { InputField } from "../../atoms/input-field/index";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL } from "../../../constants/api_route";

export const ContactPurpose = {
  TRAINING: "training",
  JOB: "job"
};

const timeOptions = [
  { value: "11:00", name: "11:00 am" },
  { value: "12:00", name: "12:00 pm" },
  { value: "01:00", name: "1:00 pm" },
  { value: "04:00", name: "4:00 pm" },
  { value: "05:00", name: "5:00 pm" },
  { value: "06:00", name: "6:00 pm" },
]

export const TrainingApplicationForm = ({ type }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, value: null });

  const { register, handleSubmit, formState: {
    errors
  }, reset } = useForm();


  const minDate = new Date().toISOString().split('T')[0]

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    const clampedValue = numericValue.slice(0, 10);
    const alphabeticValue = inputValue.replace(/[^A-Za-z]/g, '');


    const filteredValues = {
      numeric: clampedValue,
      alphabetic: alphabeticValue,
    };

    if (event.target.type === "number") {
      event.target.value = filteredValues.numeric;
    } else {
      event.target.value = filteredValues.alphabetic;
    }

  };


  const onSubmit = async (data) => {
    const localDateTime = data.scheduleDate + "T" + data.scheduleTime
    let reqData = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      purpose: type,
      scheduleDate: localDateTime,
      totalExperience: data.totalExperience,
      releventExperience: data.releventExperience,
    };

    if (data.linkedinLink) {
      reqData.linkedinLink = data.linkedinLink;
    }
    if (data.githubLink) {
      reqData.githubLink = data.githubLink;
    }

    try {
      setLoading(true);
      const JSONdata = JSON.stringify(reqData);

      const apiUrl = BASE_URL + "contact";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSONdata
      };
      const res = await fetch(apiUrl, options);
      const jsonRes = await res.json()
      if (jsonRes?.success) {
        reset();
        setMessage(jsonRes?.message);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }
    } catch (error) {
      setError({ error: true, value: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={
        handleSubmit(onSubmit)
      }>
        <InputField className="px-4 py-3 mb-4"
          type="text"
          onInput={handleInput}
          label="First Name"
          showStar={true}
          error={
            errors?.firstName
          }
          placeholder="Enter First Name"
          {...register("firstName", {
            required: {
              value: true,
              message: "Please enter your First Name",
            },
          })}
          inputmode="text"

        />
        <InputField className="px-4 py-3 mb-4"
          label="Last Name"
          type="=text"
          onInput={handleInput}
          showStar={true}
          error={
            errors?.lastName
          }
          placeholder="Enter Last Name"
          {...register("lastName", {
            required: {
              value: true,
              message: "Please enter your Last Name",
            },
          })} />
        <InputField className="px-4 py-3 mb-4"
          label="Email Address"
          showStar={true}
          error={
            errors?.email
          }
          placeholder="Enter Email Address"
          {...register("email", {
            required: {
              value: true,
              message: "Please enter your email",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })} />
        <InputField className="px-4 py-3 mb-4 input-number"
          label="Phone Number"
          type="number"
          showStar={true}
          onInput={handleInput}
          error={
            errors?.phoneNumber
          }
          placeholder="Enter Mobile Number"
          maxLength={10}
          {...register("phoneNumber", {
            required: {
              value: true,
              message: "Please enter your Phone Number",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid phone number",
            },
          })} />

        {
          type === ContactPurpose.JOB && (
            <InputField className="px-4 py-3 mb-4 input-number"
              label="Total Experience (in years)"
              showStar={true}
              type="number"
              step="0.1" 
              error={
                errors?.totalExperience
              }
              placeholder="Enter Total Experience"
              {...register("totalExperience", {
                required: {
                  value: true,
                  message: "Please Select Total Experience",
                },
                min: {
                  value: 1,
                  message: "Minimum experience required 1 years",
                },
              })} />
          )
        }
        {
          type === ContactPurpose.JOB && (
            <InputField className="px-4 py-3 mb-4 input-number"
              label="Relevent Experience (in years)"
              showStar={true}
              type="number"
              step="0.1"
              error={
                errors?.releventExperience
              }
              placeholder="Enter Relevent Experience"
              {...register("releventExperience", {
                required: {
                  value: true,
                  message: "Please Select Relevent Experience",
                },
                min: {
                  value: 1,
                  message: "Minimum experience required 1 years",
                },
              })} />
          )
        }
        <InputField className="px-4 py-3 mb-4"
          label="Schedule Date"
          showStar={true}
          type="date"
          min={minDate}
          error={
            errors?.scheduleDate
          }
          placeholder="Schedule Date"
          {...register("scheduleDate", {
            required: {
              value: true,
              message: "Please Select a date",
            },
          })}
        />

        <div className="mb-4">
          <label className="text-sm text-gray-25 block">Schedule Time <span className="text-red-400">*</span></label>
          <select
            {...register("scheduleTime", {
              required: {
                value: true,
                message: "Please Select a time",
              },
            })}
            className="px-4 py-4 w-full bg-white outline-none" >
            <option value="" hidden>Select Time</option>
            {timeOptions.map((item, idx) => (
              <option key={idx} value={item.value}>{item.name}</option>
            ))}

          </select>
          <span className="text-sm text-red-500 block" >
            {errors.scheduleTime && errors.scheduleTime?.message}
          </span>
        </div>
        {
          type === ContactPurpose.JOB && (
            <InputField
              className="px-4 py-3 mb-4 bg-white"
              label="Linkedin Profile Link"
              type="text"
              placeholder="Enter your Linkedin Profile"
              error={errors?.linkedinLink}
              {...register("linkedinLink", {
                validate: (value) => {
                  if (value && !value.includes("linkedin.com")) {
                    return "Please enter a valid LinkedIn profile link.";
                  }
                  return true;
                },
              })}
            />
          )
        }
        {
          type === ContactPurpose.JOB && (
            <InputField className="px-4 py-3 mb-4 bg-white" label="Github Profile Link (username)" type="text" placeholder="Enter your Github Profile"
              error={
                errors?.githubLink
              }
              {...register("githubLink", {
                required: false,
              })}

            />
          )
        }
        <div className="flex justify-center items-center">
          <SolidButton title={
            loading ? "Loading" : "Submit"
          }
            hoverText="Submit"
            type="sumbit"
            className="px-10 py-2" />
        </div>
        <div>
          {
            message ? (
              <div className="text-green-500 mt-1 font-medium">{message}</div>
            ) : error?.error ? (
              <div className="text-red-500">Failed to send message</div>
            ) : null
          }
        </div>
      </form>
    </div>
  );
};
