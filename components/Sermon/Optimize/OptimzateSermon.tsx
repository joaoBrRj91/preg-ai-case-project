import { Upload, Sparkles, Loader } from "lucide-react";
import FileUpload from "../../UI/SermonOptimization/FileUpload";
import OptimizationResult from "./OptimzateResult";
import { useFileUpload } from "../../../hooks/SermonOptimization/useFileUpload";
import { useSermonOptimization } from "../../../hooks/SermonOptimization/useSermonOptimization";
import { FILE_CONFIG } from "../../../utils/constants";

const OptimizeSermon = () => {
  const { uploadedFile, uploadError, handleFileUpload } = useFileUpload();
  const { loading, optimizedSermon, error, optimizeSermon } =
    useSermonOptimization();

  const handleOptimization = async () => {
    if (!uploadedFile) {
      alert("Por favor, faça o upload de um arquivo");
      return;
    }
    await optimizeSermon(uploadedFile);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Upload className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Otimização de Sermões
          </h2>
          <p className="text-gray-600">
            Faça upload do seu sermão e nossa IA otimizará mantendo sua essência
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <FileUpload
            onFileSelect={handleFileUpload}
            selectedFile={uploadedFile}
            error={uploadError}
          />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">
              Formatos aceitos
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              {FILE_CONFIG.ALLOWED_MIME_TYPES.map((type, index) => (
                <li key={index}>. {type}</li>
              ))}
            </ul>
          </div>
        </div>

        {(error || uploadError) && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error || uploadError}</p>
          </div>
        )}

        <button
          onClick={handleOptimization}
          disabled={loading || !uploadedFile}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Otimizando sermão...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Otimizar Sermão
            </>
          )}
        </button>

        {optimizedSermon && (
          <div className="mt-8">
            <OptimizationResult
              title={optimizedSermon.title}
              improvements={optimizedSermon.improvements}
              content={optimizedSermon.content}
              statisticsOriginalContent={
                optimizedSermon.statisticsOriginalContent
              }
              statisticsOptimizateContent={
                optimizedSermon.statisticsOptimizateContent
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OptimizeSermon;
