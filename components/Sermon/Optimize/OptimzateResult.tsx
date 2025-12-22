import { CheckCircle } from "lucide-react";

export interface SermonOptimizationData {
  title: string;
  improvements: string[];
  content: string;
  statisticsOriginalContent: {
    words: string;
    points: string;
    verses: string;
    minutes: string;
  };
  statisticsOptimizateContent: {
    words: string;
    points: string;
    verses: string;
    minutes: string;
  };
}

const getKeyStatisticTranslated = (key: string) => {
  switch (key) {
    case "words":
      return "palavras";
    case "points":
      return "pontos";
    case "verses":
      return "versículos";
    case "minutes":
      return "minutos";
    default:
      return key;
  }
};

const OptimizationResult = ({
  title,
  improvements,
  content,
  statisticsOriginalContent,
  statisticsOptimizateContent,
}: SermonOptimizationData) => {
  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
      <div className="flex items-center mb-4">
        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          Sermão Otimizado com Sucesso!
        </h3>
      </div>

      <h4 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h4>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm mr-2">
            Melhorias
          </span>
          Aplicadas ao Seu Sermão
        </h4>
        <div className="bg-white rounded-lg p-4 space-y-2">
          {improvements.map((improvement, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{improvement}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">
          Estatísticas originais do sermão
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(statisticsOriginalContent).map(([key, value]) => (
            <div
              key={getKeyStatisticTranslated(key)}
              className="bg-white rounded-lg p-3 text-center border border-gray-200"
            >
              <div className="text-2xl font-bold text-green-600">{value}</div>
              <div className="text-sm text-gray-600 capitalize">
                {getKeyStatisticTranslated(key)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">
          Estatísticas do sermão otimizado
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.entries(statisticsOptimizateContent).map(([key, value]) => (
            <div
              key={getKeyStatisticTranslated(key)}
              className="bg-white rounded-lg p-3 text-center border border-gray-200"
            >
              <div className="text-2xl font-bold text-green-600">{value}</div>
              <div className="text-sm text-gray-600 capitalize">
                {getKeyStatisticTranslated(key)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Conteúdo Otimizado</h4>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Dica:</strong> Revise o conteúdo e faça ajustes conforme
          seu estilo.
        </p>
      </div>
    </div>
  );
};

export default OptimizationResult;
