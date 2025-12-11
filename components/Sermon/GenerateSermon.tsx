import { useState } from "react";
import { Sparkles, Loader } from "lucide-react";
import { useSermonGeneration } from "../../hooks/useSermonGeneration";
import type { SermonFormData } from "../../hooks/useSermonGeneration";
import { SERMON_STYLES, TARGET_AUDIENCES } from "../../utils/constants";

const GenerateSermon = () => {
  const { loading, error, generatedSermon, generateSermon } =
    useSermonGeneration();
  const [sermonData, setSermonData] = useState<SermonFormData>({
    title: "",
    style: "expositivo",
    targetAudience: "geral",
  });

  if (error) {
    alert(error);
  }

  const handleSermonGeneration = async () => {
    if (!sermonData.title.trim()) {
      alert("Por favor, informe o tema do sermão");
      return;
    }
    console.log(sermonData);
    generateSermon(sermonData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Geração Inteligente de Sermões
          </h2>
          <p className="text-gray-600">
            Informe os detalhes e nossa IA criará um sermão completo para você
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tema do Sermão *
            </label>
            <input
              type="text"
              value={sermonData.title}
              onChange={(e) =>
                setSermonData({ ...sermonData, title: e.target.value })
              }
              placeholder="Ex: O Amor de Deus, Fé em tempos difíceis..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estilo do Sermão
              </label>
              <select
                value={sermonData.style}
                onChange={(e) =>
                  setSermonData({ ...sermonData, style: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {SERMON_STYLES.map((sermon_style_value, idx) => (
                  <option key={idx} value={sermon_style_value.label}>
                    {sermon_style_value.value}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Público-Alvo
              </label>
              <select
                value={sermonData.targetAudience}
                onChange={(e) =>
                  setSermonData({
                    ...sermonData,
                    targetAudience: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {TARGET_AUDIENCES.map((target_audience_value, idx) => (
                  <option key={idx} value={target_audience_value.label}>
                    {target_audience_value.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleSermonGeneration}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Gerando sermão...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5 mr-2" />
                Gerar Sermão
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateSermon;
