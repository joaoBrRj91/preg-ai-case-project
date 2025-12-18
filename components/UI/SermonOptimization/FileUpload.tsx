import { Upload, FileText, X } from "lucide-react";
import { FILE_CONFIG } from "../../../utils/constants";

export interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFile: File | null;
  error: string | null;
}

const FileUpload = ({ onFileSelect, selectedFile, error }: FileUploadProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleRemove = () => {
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload do Sermão
      </label>

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition duration-300 ${
          error
            ? "border-red-300 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input
          type="file"
          onChange={handleFileChange}
          accept={FILE_CONFIG.ALLOWED_MIME_TYPES.join(",")}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload
            className={`h-12 w-12 mx-auto mb-4 ${
              error ? "text-red-400" : "text-gray-400"
            }`}
          />
          <p className="text-gray-600 mb-2">
            Clique para fazer upload ou arraste seu arquivo aqui
          </p>
          <p className="text-sm text-gray-500">
            {FILE_CONFIG.ALLOWED_MIME_TYPES.join(", ")} (máx. 10MB)
          </p>
        </label>
      </div>

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}

      {selectedFile && !error && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-green-600 mr-2" />
            <div>
              <span className="text-green-800 font-medium block">
                {selectedFile.name}
              </span>
              <span className="text-green-600 text-sm">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
