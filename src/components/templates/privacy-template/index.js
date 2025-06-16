import React from 'react'
import Layout from '../../organisms/layout'
import TitleBar from '../../organisms/page-titlebar/pageTitleBar'
import { PrivacyContent } from '../../organisms/privacy-policy'

export default function PrivacyTemplate() {
  return (
<>
  <Layout title="Privacy Policy | Cuilsoft Solutions">
     <TitleBar title="Privacy Policy" text="Privacy Policy" />


<PrivacyContent/>


</Layout>
</>

  )
}
