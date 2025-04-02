import Link from "next/link";
import React from "react";

// Define the type for the price card
interface PriceCard {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
}

const priceCards: PriceCard[] = [
  {
    id: 1,
    title: "Basic IT Support Plan & Web Designing",
    description:
      "Ideal for individuals and small teams needing essential IT support and marketing also.",
    price: 500,
    features: [
      "1 GB cloud storage",
      "Email support during business hours",
      "Remote troubleshooting",
      "Regular system updates",
    ],
  },
  {
    id: 2,
    title: "Advanced IT Support & Web Hosting Plan",
    description:
      "Designed for growing businesses requiring robust web hosting and IT services.",
    price: 1000,
    features: [
      "10 GB cloud storage",
      "24/7 support",
      "Website hosting with uptime guarantee",
      "Regular security audits",
    ],
  },
  {
    id: 3,
    title: "Enterprise IT Solutions & Application Development",
    description:
      "Comprehensive IT solutions and application development for large enterprises.",
    price: 2000,
    features: [
      "100 GB cloud storage",
      "24/7 priority support",
      "Custom application development",
      "Cloud infrastructure management",
     
    ],
  },
];

const PriceCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {priceCards.map((card) => (
        <div
          key={card.id}
          className="bg-transparent border-2 border-white  p-6 rounded-xl shadow-lg w-80 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-center text-white">
            {card.title}
          </h3>
          <p className="text-center text-white mt-2">{card.description}</p>
          <div className="flex justify-center items-baseline mt-4">
            <span className="text-4xl font-semibold text-white">
            ₹{card.price}
            </span>
            <span className="text-sm text-white ml-1">/month</span>
          </div>

          <ul className="mt-6 space-y-2 text-white">
            {card.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/contact_us">
            <button className="w-full mt-6 py-2 bottom-0 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Choose Plan
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PriceCards;
