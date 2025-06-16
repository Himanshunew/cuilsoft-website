import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../../atoms/input-field";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { BASE_URL } from "../../../constants/api_route";

export const NewsLetter = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  const [error, setError] = useState({
    error: false,
    value: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      setSent(false);
      setMessage('')
      setError({
        error: false,
        value: '',
      });
    }, 2000);

  }, [sent, error?.error]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.message = "Newsletter Subscribed";
      const JSONdata = JSON.stringify({ email: data.email });

      const endpoint = BASE_URL + "/subscribe";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const res = await fetch(endpoint, options);
      const jsonRes = await res.json();
      if (jsonRes?.success) {
        setSent(true);
        setMessage(jsonRes?.message)
        reset();
      } else {
        setError({
          error: true,
          value: jsonRes?.message,
        });
      }
    } catch (error) {
      setError({
        error: true,
        value: error,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-20 md:py-16 overflow-hidden ">
      <div className="container">
        <div
          className=" bg-[url('/images/newslatter-bg.png')] bg-no-repeat bg-cover bg-right md:bg-center relative px-6 md:px-72 pt-12 md:pt-16 pb-12 md:pb-14 rounded-[20px]"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="block lg:flex flex-col md:flex-row justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold text-white text-lg md:text-xl leading-[18px] md:leading-6">
                  SUBSCRIBE TO OUR <br />
                  <span className="md:text-44 text-2xl md:text-3xl text-white leading-10 md:leading-[55px] font-bold">
                    NEWSLETTER
                  </span>
                </h4>
              </div>
              <div>
                <InputField
                  className="px-5 md:px-30 py-3 md:py-6 w-full leading-[25px] md:leading-5 mb-5 md:mb-[0] lg:w-[300px] xl:w-[400px]"
                  errorClass="md:absolute -bottom-6"
                  spacing="0"
                  error={errors?.email}
                  placeholder="Enter your Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {sent ? (
                  <div className="text-green-500 md:absolute bottom-9">{message}</div>
                ) : error?.error ? (
                  <div className="text-red-500 md:absolute bottom-9">{error?.value}</div>
                ) : null}
              </div>
              <SolidButton
                wrapperClass="subscribeBtn mt-5 md:mt-0"
                className="px-11 py-4 text-lg md:text-2xl"
                title={loading ? "Loading..." : "Subscribe"}
                hoverText="Subscribe"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
