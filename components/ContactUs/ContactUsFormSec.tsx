import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

interface FormValues {
  fName: string;
  lName: string;
  email: string;
  phoneNumber: string;
  message: string;
  subject: string;
}

const formFields: Array<{
  type: string;
  placeholder: string;
  name: keyof FormValues;
}> = [
    { type: "email", placeholder: "Email Id", name: "email" },
    { type: "text", placeholder: "Phone Number", name: "phoneNumber" },
  ];

const validationSchema = Yup.object({
  fName: Yup.string().required("First name required"),
  lName: Yup.string().required("Last name required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.number().required("Phone number required"),
  message: Yup.string(),
  subject: Yup.string(),
});

const ContactUsFormSec = () => {
  const { handleSubmit, values, handleChange, handleBlur, resetForm } =
    useFormik<FormValues>({
      initialValues: {
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          const template = {
            to_name: "codevisionarystudio",
            from_first_name: values.fName,
            from_last_name: values.lName,
            from_email: values.email,
            message: values.message,
            from_number: values.phoneNumber,
            subject: values.subject,
          };

          const sendEmail = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_CONTACT_US_TEMPLATE_ID ?? "",
            template,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          );

          if (sendEmail.status === 200) {
            toast.success("Email sent! Our team will get back to you soon");
            resetForm();
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong! Please try again later");
        }
      },
    });

  return (
    <div className="w-full h-screen flex justify-center">
      <div id="contact-form" className="flex justify-center mt-20  items-center gap-12 w-[83%] h-[88%] shadow-[0px_0px_4px_0px_#89E2FF33] px-8 rounded-xl ">
        <div className="w-[58%] ml-4 ">
          <div className="text-left mb-12">
            <h1
              className="text-4xl font-bold tracking-wide"
              style={{ fontFamily: mainFont.style.fontFamily }}
            >
              LET&apos;S GET IN TOUCH
            </h1>
            <p className="text-xl leading-7 text-white mt-4">
              Connect with us to explore endless possibilities! Lorem ipsum<br />  dolo
              r sit, amet consectetur adipsicing
            </p>
          </div>
          <form onSubmit={handleSubmit} className=" w-full flex flex-col ">
            <div className="flex w-full  mb-5 flex-1">
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                className=" w-full h-[50px] pl-6 mr-6 font-secondaryFont leading-6 text-md rounded-full border border-[#FFFFFF33] text-white bg-[#000D0F] focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fName}
              />
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                className="w-full h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-[#FFFFFF33] text-white bg-[#000D0F] focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lName}
              />
            </div>
            <div className="flex w-full mb-5 flex-1">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full h-[50px] pl-6 mr-6 font-secondaryFont leading-6 text-md rounded-full border border-[#FFFFFF33] text-white bg-[#000D0F] focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                className="w-full h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-[#FFFFFF33] text-white bg-[#000D0F] focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="flex w-full  mb-5 flex-1 rounded-full border border-[#FFFFFF33]">
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="subject"
                className="w-[96%] border-white h-[50px] my-auto pl-6  font-secondaryFont leading-6 text-md  text-white bg-transparent focus:outline-none placeholder:text-white placeholder:text-sm"
              >
                <option value="">Service</option>
                <option value="web development">Website Design and Development</option>
                <option value="app development">Mobile Application Development</option>
                <option value="UI/UX Design">Web Application Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="UI/UX Design">Search Engine Optimization (SEO)</option>
                <option value="UI/UX Design">Social Media Marketiing</option>
                <option value="UI/UX Design">Branding</option>
              </select>
            </div>
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="w-full h-[150px] pl-6 mb-8 font-secondaryFont leading-6 text-md rounded-[16px] 
              border border-[#FFFFFF33] text-white bg-[#000D0F] focus:outline-none placeholder:text-white placeholder:text-sm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <button
              type="submit"
              style={{ fontFamily: mainFont.style.fontFamily }}
              className="w-[187px] h-[50px] text-black font-bold bg-white rounded-full transition duration-300 ease-in-out 
              hover:bg-gradient-to-r hover:from-[#2bb2e0]  hover:to-[#23849d] hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-[2px] h-[80%] bg-gradient-to-b from-[#007FA9] to-[#000D0F]  "></div>
        <div className="w-[42%] h-[81%] ml-0.5 flex flex-col ">
          <div>
            <h1 style={{ fontFamily: mainFont.style.fontFamily }} className="text-4xl ">
              Call us
            </h1>
            <p className="font-secondaryFont text-xl leading-7 pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis totam magnam quia magni suscipit possimus.
            </p>
            <p style={{ fontFamily: mainFont.style.fontFamily }} className="flex gap-4 my-4">
              <Image src="/assets/ph_phone_fill.png" alt="" height={20} width={20} /> +91-1234567890
            </p>
          </div>
          <div>
            <h1 style={{ fontFamily: mainFont.style.fontFamily }} className="text-4xl ">
              Email
            </h1>
            <p className="font-secondaryFont text-xl leading-7 pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis totam magnam quia magni suscipit possimus.
            </p>
            <p style={{ fontFamily: mainFont.style.fontFamily }} className="flex gap-4 my-4">
              <Image src="/assets/ic_outline_email.png" alt="" height={20} width={20} />
              codevisionarystudio@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormSec;
