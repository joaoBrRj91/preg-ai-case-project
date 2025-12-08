// ...existing code...
import HeroSection from "./HeroSectionPage";
import FeaturesSection from "./FeatureSectionPage";
import type { FeatureItemProps } from "./FeatureSectionPage";
import { Book, FileText } from "lucide-react";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const HomePage = ({ setActiveTab }: HomeProps) => {
  const features: FeatureItemProps[] = [
    {
      icon: Book,
      flow: "generate",
      iconColor: "blue",
      title: "Geração Inteligente de Sermões",
      description:
        "Informe o tema, estilo e público-alvo e nossa IA gerará um esboço completo com título, introdução, pontos bíblicos, aplicação e oração.",
      buttonText: "Começar agora",
      buttonColor: "blue",
    },
    {
      icon: FileText,
      flow: "optimize",
      iconColor: "green",
      title: "Otimização de Sermões",
      description:
        "Faça upload do seu sermão em PDF ou imagem e nossa IA analisará e refinará o conteúdo, mantendo seu tom e intenção original.",
      buttonText: "Otimizar Agora",
      buttonColor: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeroSection setActiveTab={setActiveTab} />
      <div className="text-center mb-12 mt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          PregAI – MVP
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Uma ferramenta inteligente para auxiliar na criação e otimização de
          sermões.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <FeaturesSection
            key={idx}
            feature={feature}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
// ...existing code...
