import { Sparkles, FileText, Upload, Book } from "lucide-react";

const HeroSectionPage = ({
  setActiveTab,
}: {
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <img
              src="/src/assets/background_pregai.jpeg"
              alt="PregAI - Pregando o Evangelho"
              className="w-53 h-53 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-2xl border-5 border-white/20"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-2 opacity-90">
            Inspirando vidas com tecnologia
          </p>
          <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8">
            a serviço do Reino
          </p>
          <p className="text-sm sm:text-base italic mb-8 max-w-2xl mx-auto opacity-90">
            "O chamado para pregar é divino. O apoio para pregar com excelência
            pode vir da tecnologia."
          </p>
          <div className="flex justify-center space-x-6 sm:space-x-12 mb-8">
            <div className="text-center">
              <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 opacity-80" />
            </div>
            <div className="text-center">
              <Book className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 opacity-80" />
            </div>
            <div className="text-center">
              <FileText className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 opacity-80" />
            </div>
            <div className="text-center">
              <Upload className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 opacity-80" />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={() => setActiveTab("generate")}
              className="w-full sm:w-auto bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 ransition duration-300 flex items-center justify-center"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Gerar Sermão
            </button>
            <button
              onClick={() => setActiveTab("optimize")}
              className="w-full sm:w-auto bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 ransition duration-300 flex items-center justify-center"
            >
              <Upload className="h-5 w-5 mr-2" />
              Otimizar Sermão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionPage;
