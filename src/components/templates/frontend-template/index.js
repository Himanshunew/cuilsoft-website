import React from 'react'

import TitleBar from '../../organisms/page-titlebar/pageTitleBar';

import Layout from '../../organisms/layout';
import FrontendPageContent from '../../../pages/frontend-development';


export default function FrontendTemplate() {
  return (
    <Layout title="Frontend Development | Cuilsoft Solutions">
      <TitleBar title="Frontend Development" text="Frontend Development" />
   <FrontendPageContent />


   
    </Layout>
  );
}
