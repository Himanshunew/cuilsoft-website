import React from 'react';
import Layout from '../../organisms/layout';
import TitleBar from '../../organisms/page-titlebar/pageTitleBar';
import { PrivacyContent } from '../../organisms/privacy-policy';

export default function TermsAndConditionsTemplate() {
  return (
    <Layout title="Terms and Conditions | Cuilsoft Solutions">
      <TitleBar title="Terms and Conditions" text="Terms and Conditions" />
      <PrivacyContent />
    </Layout>
  );
}