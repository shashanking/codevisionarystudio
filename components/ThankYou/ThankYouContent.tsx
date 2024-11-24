import { mainFont } from "@/components/UI/Mainfontt";
import Link from "next/link";

const ThankYouContent = () => {
  return (
    <main className="flex-grow flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: mainFont.style.fontFamily }}
        >
          Thank You for Reaching Out!
        </h1>
        <div className="space-y-4 text-lg text-white/80 mb-8">
          <p>
            We&apos;ve received your message and appreciate you taking the time to contact us.
          </p>
          <p>
            Our team will review your inquiry and get back to you within 24-48 hours.
          </p>
        </div>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#89E2FF] to-[#89E2FF]/60 text-black font-semibold rounded-full transition-transform hover:scale-105"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ThankYouContent;
