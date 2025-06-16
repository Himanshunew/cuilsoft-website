import React from 'react'
import Layout from '../../organisms/layout';
import TitleBar from '../../organisms/page-titlebar/pageTitleBar';
import { PricingContact } from '../../organisms/pricing';

export default function PricePlanTemplate() {
  return (
    <Layout title="Pricing | Cuilsoft Solutions">
      <TitleBar title="Pricing" text="Pricing" />
      <PricingContact />
    </Layout>
  );
}
