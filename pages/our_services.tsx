import OurServicesLanding from '@/components/OurServices/OurServicesLanding'
import OurServicesSolution from '@/components/OurServices/OurServicesSolution'
import AboutUsFooter from '@/components/AboutUs/AboutUsFooter'
import React from 'react'
import OurServicesConnect from '@/components/OurServices/OurServicesConnect'

const OurServices = () => {
  return (
    <div>
      <OurServicesLanding />
      <OurServicesSolution />
      <OurServicesConnect />
      <AboutUsFooter />
    </div>
  )
}

export default OurServices
