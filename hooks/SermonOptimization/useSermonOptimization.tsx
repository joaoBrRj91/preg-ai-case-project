import { useState } from "react";
import type { SermonOptimizationData } from "../../components/Sermon/Optimize/OptimzateResult";

export const useSermonOptimization = () => {
  const [loading, setLoading] = useState(false);
  const [optimizedSermon, setOptimizedSermon] =
    useState<SermonOptimizationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const optimizeSermon = async (file: File) => {
    if (!file) {
      setError("Nenhum arquivo selecionado");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("[Inicio] - Chamada API LLM");
      await new Promise((resolve) => setTimeout(resolve, 2500));
      console.log("[FIM] - Chamada API LLM");

      const mockOptimized: SermonOptimizationData = {
        title: "Sermão Otimizado: A Graça de Deus",
        improvements: [
          "Estrutura reorganizada para maior clareza",
          "Transições aprimoradas entre os pontos",
          "Linguagem adaptada para o público-alvo",
          "Ilustrações mais relevantes adicionadas",
          "Aplicação prática fortalecida",
          "Conclusão mais impactante",
        ],
        content: "Conteúdo completo do sermão otimizado...",
        statisticsOriginalContent: {
          words: "245",
          points: "3",
          verses: "4",
          minutes: "12-15",
        },
        statisticsOptimizateContent: {
          words: "350",
          points: "6",
          verses: "5",
          minutes: "16-18",
        },
      };

      setOptimizedSermon(mockOptimized);
    } catch (err) {
      setError("Erro ao otimizar sermão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const clearOptimization = () => {
    setOptimizedSermon(null);
    setError(null);
  };

  return {
    loading,
    optimizedSermon,
    error,
    optimizeSermon,
    clearOptimization,
  };
};
