import React from 'react'
import { SectionHeader } from '../components/molecules/section-header'
import WebServicesSection from '../components/molecules/WebServicesSection'

export default function FrontendPageContent() {
  return (<>    <div className="container flex flex-col items-center text-center ">
  <div className="w-full md:w-3/5 mb-12 pt-20">
    <h5 className="text-lg leading-5 text-secondary uppercase font-bold mb-4">OUR SERVICES</h5>
    <h3 className="text-2xl md:text-[30px] leading-8 md:leading-9 font-bold mb-2.5">
      Bespoke Web Development Services For Your Productive Future
    </h3>
    <p className="text-primary leading-6 font-medium">
      We are a web development company that helps you experience tangible business results transforming your web journey.
      From customer-facing apps to business websites, we deliver the most secure yet high-performing and feature-packed web solutions.
    </p>
  </div>
  
  <img src="/images/keyfeatures.jpg" alt="alt-text" className="mx-auto" />
</div>

<WebServicesSection />
</>
  )
}
