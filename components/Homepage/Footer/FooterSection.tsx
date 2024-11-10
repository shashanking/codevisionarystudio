/**
 * The `FooterSection` component represents the footer section of the homepage. It includes the following features:
 * - A contact form with fields for name, email, phone number, and subject
 * - A "Submit" button for the contact form
 * - The company logo and a brief description
 * - A menu with links to different pages (About Us, Our Services, Portfolio, Blogs, Contact Us)
 * - Contact information (phone number, address, email)
 * - An animated marquee with the company name and a copy icon
 * 
 * Responsiveness Notes:
 * - Fixed height of 685px might cause issues on smaller screens, consider using min-height
 * - The form fields layout might break on mobile, needs media queries for column layout
 * - The footer content width of 83% might need adjustment for very small screens
 * - The two-column layout for logo/menu sections needs responsive handling for mobile
 */
import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Image from "next/image";

const menuItems = ["About Us", "Our Services", "Portfolio", "Blogs", "Contact Us"];

const formFields = [
  { type: "text", placeholder: "Your Name" },
  { type: "email", placeholder: "Email Id" },
  { type: "text", placeholder: "Phone Number" }
];

export const FooterSection = () => {
  return (
    // Consider using min-height instead of fixed height for better responsiveness
    <div className="h-[685px] w-full bg-gradient-to-b from-[#E44F58] via-[#BF242d] to-[#5F0006] rounded-t-[60px] flex flex-col justify-between shadow-[0px_-4px_8px_0px_rgba(137,226,255,0.2)]">
      <div className="w-full flex justify-center">
        {/* 83% width might need media queries for very small screens */}
        <div className="w-[83%] mt-10">
          <h1 style={{ fontFamily: mainFont.style.fontFamily }} 
              className="text-4xl font-bold text-black uppercase tracking-wider mb-6">
            Contact Us
          </h1>
          
          {/* Form fields in row layout - needs media query for mobile column layout */}
          <div className="flex justify-between gap-4 mt-6 w-full">
            {formFields.map((field, index) => (
              <form key={index} className="flex-1">
                {/* Fixed height input might need adjustment for different screen sizes */}
                <input type={field.type} className="w-full h-[36px] leading-6 text-sm text-black bg-transparent border-b border-black focus:outline-none placeholder:text-black/70 placeholder:text-sm" placeholder={field.placeholder} />
              </form>
            ))}
            
            <form className="relative flex-1">
              {/* Fixed height select might need adjustment for different screen sizes */}
              <select className="w-full h-[36px] leading-6 text-sm text-black bg-transparent border-b border-black focus:outline-none cursor-pointer pr-8">
                <option value="">Subjects</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="design">UI/UX Design</option>
              </select>
            </form>
          </div>

          {/* Fixed height button - consider responsive height */}
          <button style={{ fontFamily: mainFont.style.fontFamily }} 
                  className="submit-button bg-black text-[#C44F56] hover:text-white w-full mt-12 h-14 rounded-full text-lg font-medium uppercase flex items-center justify-center transition-colors relative overflow-hidden group">
            Submit
          </button>

          {/* Two-column layout needs media query for mobile stack layout */}
          <div className="flex justify-between gap-10 mt-20">
            {/* Fixed width percentage might need adjustment for mobile */}
            <div className="w-[40%] space-y-6">
              {/* Consider responsive image sizing */}
              <Image src="/assets/NavLogo.png" alt="Logo" width={200} height={70} className="object-contain" />
              <p className="text-base font-secondaryFont leading-relaxed text-white/90">
                Your trusted partner in digital transformation. We create innovative solutions that drive business growth.
              </p>
            </div>

            {/* Fixed width percentage might need adjustment for mobile */}
            <div className="w-[45%] flex justify-end">
              {/* Fixed width might cause issues on smaller screens */}
              <div className="flex flex-col gap-3 w-[126px] mr-10">
                <h1 style={{ fontFamily: mainFont.style.fontFamily }} className="text-xl leading-6 font-semibold text-white">
                  Menu
                </h1>
                <ul className="space-y-2 text-base text-white/90">
                  {menuItems.map((item, index) => (
                    <li key={index} className="hover:text-white/70 cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Fixed width might cause issues on smaller screens */}
              <div className="flex flex-col gap-3 w-[309px]">
                <h2 style={{ fontFamily: mainFont.style.fontFamily }} className="text-xl leading-6 font-semibold text-white">
                  Contact Info
                </h2>
                <div className="space-y-2 text-base text-white/90">
                  <p>+91-1234567890</p>
                  <p>Address, Kolkata,<br />West Bengal, 700040</p>
                  <p>sales@codevisionary.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee section - might need adjustment for very small screens */}
      <div className="w-full overflow-hidden bg-transparent">
        <div className="w-full h-[1px] bg-white/90" />
        {/* Fixed height might need adjustment */}
        <div className="h-[100px] flex items-center">
          {/* Large text size might need scaling for mobile */}
          <div style={{ fontFamily: mainFont.style.fontFamily }} className="animate-marquee whitespace-nowrap text-[100px] leading-[98px] uppercase text-black/20">
            {[1, 2, 3].map((_, index) => (
              <React.Fragment key={index}>
                Code Visionary Studio
                {/* Fixed image size might need responsive adjustment */}
                <Image src="/assets/copy_icon.png" alt="Copy Icon" width={200} height={200} 
                       className="ml-8 mr-8 object-contain" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] mb-6 bg-white/90" />
      </div>
    </div>
  );
};