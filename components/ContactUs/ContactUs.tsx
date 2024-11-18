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

const ContactUs = () => {
  // Update the ContactUs component with formik
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
    <div className="w-full h-screen text-center gap-20 flex flex-col justify-center">
      <div className="">
        <h1
          className=" text-7xl font-extrabold leading-[100px] bg-gradient-to-r from-[#FFFFFF] via-[#24a3bf] to-[#2c24bf] inline-block text-transparent bg-clip-text"
          style={{ fontFamily: mainFont.style.fontFamily }}
        >
          Get in touch
        </h1>
        <p className="text-xl leading-7 text-white ">
          Reach out, and lets create a universe of possibilities together!
        </p>
      </div>
      <div className="w-full flex justify-center relative ">
        <div className="absolute bg-[#3124bf4f] rounded-full blur-3xl h-[252px] w-[252px] left-[7%] -top-[20%] -z-10 "></div>
        <div className="absolute bg-[#3124bf4f] rounded-full blur-3xl h-[252px] w-[252px] right-[7%] -top-[20%] -z-10 "></div>
        <div className="absolute bg-[#3124bf4f] rounded-full blur-3xl h-[252px] w-[252px] left-[7%] -bottom-[40%] -z-10 "></div>
        <div className=" relative  z-10 flex justify-around items-center w-[75%] shadow-[backdrop-filter: blur(380px)] border-[#0A0D170D] bg-[#06060654] h-[110%] rounded-lg ">
          <div className="flex flex-col justify-between gap-4  w-[35%] ">
            <div className="text-left">
              <h1
                style={{ fontFamily: mainFont.style.fontFamily, color: "#fff" }}
                className="text-3xl leading-9 w-full"
              >
                Let&apos;s connect constellations
              </h1>
              <p className="text-lg w-full text-white ">
                Lets align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex w-full gap-6 mb-4">
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fName}
                />
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className="h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lName}
                />
              </div>
              {formFields.map((field, index) => (
                <div key={index} className="flex-1 mb-4">
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-[428px] h-[50px] pl-6 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[field.name]}
                  />
                </div>
              ))}
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-[428px] h-[150px] pl-6 mb-4 font-secondaryFont leading-6 text-md rounded-lg border-[#FFFFFF33] text-white bg-[#FFFFFF0D] border-b border-white focus:outline-none placeholder:text-white placeholder:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <button
                type="submit"
                className="w-[428px] h-[50px]  text-white font-secondaryFont bg-gradient-to-r  from-[#E44F58] via-[#BF242d] to-[#5F0006] rounded-lg transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>{" "}
          <div>
            <video
              autoPlay
              loop
              muted
              className="w-[560px] h-[560px] object-cover rounded-2xl shadow-2xl"
            >
              <source src="/assets/contact_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
