import React from 'react'
import PlanCard from '../../price_table';
import { plans } from '../../../constants/plan_data';
import { SectionHeader } from '../../molecules/section-header';


const handleButtonClick = (planName) => {
  alert(`You clicked on ${planName} plan!`);
};

export const PricingContact = () => {

  return (
<div className="container mt-[20px]">
      <SectionHeader
        subtitle="Pricing Plans"
        title="Choose Your Plan"
        des=""
        className="pt-20"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-9">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            discount={plan.discount}
            buttonLabel={plan.buttonLabel}
            onClick={() => handleButtonClick(plan.title)}
          />
        ))}
      </div>
    </div>
  )
}
