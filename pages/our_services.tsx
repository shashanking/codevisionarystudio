import OurServicesLanding from '@/components/OurServices/OurServicesLanding'
import OurServicesSolution from '@/components/OurServices/OurServicesSolution'
import FooterTwo from '@/components/common/Footer/FooterTwo'
import React from 'react'
import OurServicesConnect from '@/components/OurServices/OurServicesConnect'
import OurServicesAnimatedSec from '@/components/OurServices/OurServicesAnimatedSec'

const OurServices = () => {
  return (
    <div>
      <OurServicesLanding />
      {/* <OurServicesSolution />  */}
      <OurServicesAnimatedSec />
      <OurServicesConnect />
      <FooterTwo useBlackBackground={false} />
    </div>
  )
}

export default OurServices
