import React from "react";
import { ArrowRight } from "lucide-react";

export interface FeatureSectionProps {
  feature: FeatureItemProps;
  setActiveTab: (tab: string) => void;
}

export interface FeatureItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  flow: string;
  iconColor: any;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: any;
}

const FeatureSectionPage = ({ feature, setActiveTab }: FeatureSectionProps) => {
  const {
    icon: Icon,
    flow,
    iconColor,
    title,
    description,
    buttonText,
    buttonColor,
  } = feature;

  const iconColorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
  };

  const buttonColorClasses = {
    blue: "text-blue-600 hover:text-blue-800",
    green: "text-green-600 hover:text-green-800",
  };

  // safe lookups with type cast and fallback to empty string
  const iconClass =
    iconColorClasses[iconColor as keyof typeof iconColorClasses] ?? "";
  const buttonClass =
    buttonColorClasses[buttonColor as keyof typeof buttonColorClasses] ?? "";

  return (
    <div className="flex justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
        <div className="flex items-center mb-4">
          <div className={`${iconClass} p-3 rounded-lg mr-4`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <button
          onClick={() => setActiveTab(flow)}
          className={`${buttonClass} font-medium flex items-center transition duration-200`}
        >
          {buttonText} <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default FeatureSectionPage;
