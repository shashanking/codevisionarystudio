import React from "react";
import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

interface MenuPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about_us" },
  { name: "Our Services", path: "/our_services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/price" },
  { name: "Contact Us", path: "/contact_us" },
];

const MenuPage: React.FC<MenuPageProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Content */}
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#0F0F0F] z-50 overflow-y-auto"
          >
            <div className="relative w-full h-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white hover:text-[#C44F56] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Menu Items */}
              <div className="pt-24 px-8 pb-12">
                <nav className="flex flex-col gap-8">
                  {menuItems.map((item, index) => (
                    <m.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={onClose}
                        className="group block"
                      >
                        <span
                          style={{ fontFamily: mainFont.style.fontFamily }}
                          className="text-white text-3xl block group-hover:text-[#C44F56] transition-colors duration-300"
                        >
                          {item.name}
                        </span>
                      </Link>
                    </m.div>
                  ))}
                </nav>

                {/* Contact Button */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <Link
                    href="/contact_us"
                    onClick={onClose}
                    className="block w-full"
                  >
                    <div className="relative w-full h-[62px] group bg-[#C44F56] rounded-[58px] flex items-center justify-between px-6 hover:bg-[#d85961] transition-colors duration-300">
                      <span
                        style={{ fontFamily: mainFont.style.fontFamily }}
                        className="text-white text-xl"
                      >
                        Contact us
                      </span>
                      <div className="w-[22px] h-[22px] transform rotate-90">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 3L11 19M11 3L17 9M11 3L5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </m.div>

                {/* Social Links */}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 flex gap-6 justify-center"
                >
                  <Link href="https://www.facebook.com/profile.php?id=61564480971649" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white/60 hover:border-white hover:bg-white hover:text-[#0F0F0F] text-white/60 hover:text-[#0F0F0F] transition-all">
                      <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com/codevisionarystudio/" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white/60 hover:border-white hover:bg-white hover:text-[#0F0F0F] text-white/60 hover:text-[#0F0F0F] transition-all">
                      <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/company/104408508/" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white/60 hover:border-white hover:bg-white hover:text-[#0F0F0F] text-white/60 hover:text-[#0F0F0F] transition-all">
                      <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </div>
                  </Link>
                  <Link href="https://youtube.com/@codevisionarystudio?si=SovfCVSejRX4Gpun" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 p-2 flex items-center justify-center rounded-full border border-white/60 hover:border-white hover:bg-white hover:text-[#0F0F0F] text-white/60 hover:text-[#0F0F0F] transition-all">
                      <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                    </div>
                  </Link>
                </m.div>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuPage;
