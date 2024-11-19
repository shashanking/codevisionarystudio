import ContactUsFormSec from "@/components/ContactUs/ContactUsFormSec";
import ContactUs from "@/components/ContactUs/ContactUsLanding";
import FooterTwo from "@/components/common/Footer/FooterTwo"; // assuming FooterTwo is imported from this location

const ContactUsPage = () => {
  return (
    <div>
      <ContactUs />

      <ContactUsFormSec />
      <FooterTwo useBlackBackground={true}  />
    </div>
  );
};

export default ContactUsPage;
