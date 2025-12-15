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
      <div className="bg-white rounded-lg shadow-md max-w-2xl mx-auto px-4 py-6 sm:px-4 lg:px-8 mt-5 mb-10">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-xl font-semibold text-gray-900 mb-3">
            PregAI – MVP
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            PregAI é uma ferramenta de inteligência artificial que auxilia na
            preparação de sermões, sem substituir a oração nem o direcionamento
            de Deus. Mesmo ao gerar mensagens a partir de temas bíblicos, seu
            uso exige discernimento e a busca constante pela orientação do
            Espírito Santo, para que a Palavra seja transmitida com fidelidade e
            edifique a igreja.
          </p>
        </div>
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
