/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { InputField } from "../../atoms/input-field";
import { TeaxtArea } from "../../atoms/texrarea/index,";

export const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ error: false, value: null });
    const { register, handleSubmit, formState: {
        errors
    }, reset } = useForm();

    useEffect(() => {
        setTimeout(() => {
            setSent(false);
            reset()
        }, 2000);
    }, [sent]);
    const handleInput = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
        const clampedValue = numericValue.slice(0, 10); // Get the first 10 digits
        event.target.value = clampedValue; // Update input value
    };
    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const JSONdata = JSON.stringify(data);

            const endpoint = "/api/mail";

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSONdata
            };
            const res = await fetch(endpoint, options);
            if (res?.ok) {
                setSent(true);
                reset();
                setLoading(false);
            }
            setSent(true);
            setError({ error: false, value: '' });

        } catch (error) {
            if (error?.message) {
                setError({ error: true, value: error.message });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact_form md:w-3/5">
            <form onSubmit={
                handleSubmit(onSubmit)
            }>
                <div className="md:flex gap-6 w-full">
                    <InputField
                        spacing="mb-4"
                        error={
                            errors?.firstName
                        }
                        placeholder="First Name"
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: "Please enter your First Name",
                            },
                        })} />
                    <InputField placeholder="Last Name" {...register("lastName")} />
                </div>
                <InputField error={
                    errors?.email
                }
                    placeholder="Email Address"
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
                <InputField onInput={handleInput}
                    error={
                        errors?.phoneNumber
                    }
                    placeholder="Mobile Number"
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
                <TeaxtArea error={
                    errors?.message
                }
                    placeholder="How can we help you?"
                    {...register("message", {
                        required: {
                            value: true,
                            message: "Please enter your query",
                        },
                    })} />
                <div className="flex items-center mt-4">
                    <SolidButton title={
                        loading ? "Loading" : "Submit"
                    }
                        hoverText="Submit"
                        type="sumbit"
                        className="px-10"
                        disabled={loading} />
                </div>
                <div> {
                    sent ? (
                        <div className="text-green-500">Thank you for reaching out. We&apos;ve received your message and will get back to you within 24 hours.</div>
                    ) : error?.error ? (
                        <div className="text-red-500">Failed to send message</div>
                    ) : null
                } </div>
            </form>
        </div>
    );
};
