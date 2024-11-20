import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
interface FormValues {
  fName: string;
  lName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const formFields: Array<{
  type: string;
  placeholder: string;
  name: keyof FormValues;
}> = [
  { type: "email", placeholder: "Email Id", name: "email" },
  { type: "text", placeholder: "Phone Number", name: "phoneNumber" },
];
// Add validation schema
const validationSchema = Yup.object({
  fName: Yup.string().required("First name required"),
  lName: Yup.string().required("Last name required"),
  email: Yup.string().email().required("Email is required"),
  phoneNumber: Yup.number().required("Phone number required"),
  message: Yup.string(),
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
          };

          const sendEmail = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_CONTACT_US_TEMPLATE_ID ?? "",
            template,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          );

          if (sendEmail.status === 200) {
            toast.success("Email sent! Our team will get back to you soon");
            resetForm(); // This will clear all form fields
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong! Please try again later");
        }
      },
    });
  return (
    <div className="w-full h-[110vh] flex justify-center">
      <div  className="flex justify-center items-center gap-20 w-[80%] h-[100%] shadow-[0px_0px_4px_0px_#89E2FF33] px-8 rounded-xl ">
        <div dir="ltr" className="w-1/2 border  pr-12  border-r-[#1c596e] border-y-transparent border-x-transparent ">
          <div className="text-left">
            <h1
              style={{ fontFamily: mainFont.style.fontFamily, color: "#fff" }}
              className="text-3xl leading-9 w-full"
            >
              Let&apos;s Get In Touch
            </h1>
            <p className="text-lg w-full text-white my-6 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              debitis similique sed deserunt hic vitae, eligendi quisquam
              architecto dolor beatae!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="flex w-full gap-6 mb-4">
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-white text-white bg-[#FFFFFF0D]  focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fName}
              />
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-white text-white bg-[#FFFFFF0D]  focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lName}
              />
            </div>
            <div className="flex w-full gap-6 mb-4 ">
              <input
                type="text"
                name="fName"
                placeholder="Phone Number"
                className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-white text-white bg-[#FFFFFF0D]  focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
              />
              <input
                type="text"
                name="lName"
                placeholder="Email Id"
                className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-full border border-white text-white bg-[#FFFFFF0D]  focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <select
                onChange={handleChange}
                onBlur={handleBlur}
                name="subject"
                className="w-[474px] h-[50px] px-6 mb-4 font-secondaryFont leading-6 text-md rounded-full border border-white text-white  bg-[#FFFFFF0D]" 
              >
                <option value="">Services</option>
                <option value="web development">Website Design and Development</option>
                <option value="app development">Mobile Application Development</option>
                <option value="UI/UX Design">Web Application Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="UI/UX Design">Search Engine Optimization (SEO)</option>
                <option value="UI/UX Design">Social Media Marketiing</option>
                <option value="UI/UX Design">Branding</option>
              </select>
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="w-[474px] h-[150px] pl-6 mb-4 font-secondaryFont leading-6 text-md rounded-lg border border-white text-white bg-[#FFFFFF0D]  focus:outline-none placeholder:text-white placeholder:text-sm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <button
              style={{ fontFamily: mainFont.style.fontFamily }}
              type="submit"
              className="w-[138px] h-[50px] bg-white text-black flex gap-4 items-center justify-center font-secondaryFont rounded-full transition-all duration-300"
            >
              Submit <img src="/assets/submit_plane.png" alt="" />
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col">
          <div>
            <h1  style={{ fontFamily: mainFont.style.fontFamily }} className="text-4xl ">Call us</h1>
            <p className="font-secondaryFont text-lg pt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis totam magnam quia magni suscipit possimus.
            </p>
            <p style={{ fontFamily: mainFont.style.fontFamily }} className="flex gap-4 my-4">
               <img src="/assets/ph_phone_fill.png" alt="" /> +91-1234567890</p>
          </div>
          <div>
            <h1  style={{ fontFamily: mainFont.style.fontFamily }} className="text-4xl ">Email</h1>
            <p className="font-secondaryFont text-lg pt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis totam magnam quia magni suscipit possimus.
            </p>
            <p style={{ fontFamily: mainFont.style.fontFamily }} className="flex gap-4 my-4">
                <img src="/assets/ic_outline_email.png" alt="" />
                Example@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormSec;
