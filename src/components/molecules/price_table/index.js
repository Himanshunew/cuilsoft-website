"use client"

import React, { useState } from "react"
import { useRouter } from "next/router"
import { Check, Star, Zap } from "lucide-react"
import { SolidButton } from "../../atoms/buttons/solid-bitton"
import { Features } from "../../../constants/card_features"



const PlanCard = ({
  title,
  price,
  discount,
  buttonLabel,
  onClick,
  isPopular = false,
  description = "Perfect for small businesses and startups",
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      router.push("/contact")
    }
  }

  return (
    <div
      className={`w-full max-w-md mx-auto relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
        isPopular
          ? "border-amber-400 sm:scale-105 shadow-amber-200"
          : "border-gray-100"
      }`}
    >
      {/* Most Popular Label */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Header Gradient Area */}
      <div
        className={`relative p-6 sm:p-8 text-center ${
          isPopular
            ? "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500"
            : "bg-gradient-to-br from-amber-500 to-orange-600"
        }`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-white/80 text-sm mb-6">{description}</p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              <span className="text-xl align-top">$</span>
              {price}
            </div>
            {discount && (
              <div className="text-right">
                <div className="text-white/60 line-through text-base sm:text-lg">${discount}</div>
                <div className="text-amber-100 text-sm font-semibold">
                  Save ${parseInt(discount) - parseInt(price)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features + CTA */}
      <div className="p-6  sm:p-8">
        <div className="mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-amber-500" />
            What's Included
          </h4>

          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-100">
            <ul className="space-y-3">
              {Features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 group-hover:bg-amber-200 transition-colors">
                    <Check className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <SolidButton
            className="uppercase"
            wrapperClass="mb-5 md:mb-0"
            title="Click Here"
            onClick={() => router.push("/contact")}
            hoverText="CLICK HERE"
          />

          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">*Terms & Conditions apply</p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                30-day guarantee
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default PlanCard
