import { useState } from "react";
import type { SermonResultData } from "../components/Sermon/Generate/SermonResult";

export interface SermonFormData {
  title: string;
  style: string;
  targetAudience: string;
}

export const useSermonGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [generatedSermon, setGeneratedSermon] =
    useState<SermonResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateSermon = async ({
    title,
    style,
    targetAudience,
  }: SermonFormData) => {
    if (!ValidateSermonData({ title, style, targetAudience })) return;

    setLoading(true);
    setError(null);

    try {
      console.log("[Inicio] - Chamada API LLM");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("[FIM] - Chamada API LLM");

      const mockSermon: SermonResultData = {
        title: `${title}: Uma Jornada de Fé`,
        introduction: `Queridos irmãos, hoje vamos explorar o tema "${title}"...`,
        points: [
          {
            point: "1. O Fundamento Bíblico",
            verse: "João 3:16",
            development: "Neste primeiro ponto, exploramos...",
          },
        ],
        application: `A aplicação desta mensagem...`,
        prayer: `Pai celestial, obrigado por Sua Palavra...`,
      };

      setGeneratedSermon(mockSermon);
    } catch (err) {
      setError("Erro ao gerar sermão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const ValidateSermonData = ({
    title,
    style,
    targetAudience,
  }: SermonFormData) => {
    if (!title.trim() || !style.trim() || !targetAudience.trim()) {
      setError("Por favor, preencha todos os campos do sermão");
      return false;
    }

    return true;
  };

  const clearSermon = () => {
    setGeneratedSermon(null);
    setError(null);
  };

  return {
    loading,
    generatedSermon,
    error,
    generateSermon,
    clearSermon,
  };
};
