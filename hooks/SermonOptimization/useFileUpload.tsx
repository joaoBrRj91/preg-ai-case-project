import { useState, useCallback } from "react";
import { FILE_CONFIG } from "../../utils/constants";

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export const useFileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileUpload = useCallback((file: File): boolean => {
    setUploadError(null);

    if (file.size > FILE_CONFIG.MAX_SIZE) {
      setUploadError("Arquivo muito grande. Máximo 10MB.");
      return false;
    }

    if (!FILE_CONFIG.ALLOWED_MIME_TYPES.includes(file.type)) {
      setUploadError("Tipo de arquivo não suportado.");
      return false;
    }

    setUploadedFile({
      name: file.name,
      size: file.size,
      type: file.type,
    });
    return true;
  }, []);

  const clearFile = useCallback(() => {
    setUploadedFile(null);
    setUploadError(null);
  }, []);

  return {
    uploadedFile,
    uploadError,
    handleFileUpload,
    clearFile,
  };
};
