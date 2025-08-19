import React, { useEffect, useState } from "react";
import "./PhotosInput.css";

type ImageUploaderProps = {
  error?: string;
  onFilesChange?: (files: File[]) => void;
  existingFiles?: File[];
};

export function PhotosInput({
  error,
  onFilesChange,
  existingFiles,
}: ImageUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (existingFiles) {
      const validFiles = existingFiles.filter((f): f is File => f != null);

      const urlPhotos = validFiles.map((file) => URL.createObjectURL(file));

      setPreviews(urlPhotos);
      setSelectedFiles(validFiles);
    }
  }, [existingFiles]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);

    if (selectedFiles.length + filesArray.length > 3) {
      alert("You can choose up to 3 photos only");
      return;
    }
    const newFiles = [...filesArray, ...selectedFiles];
    setSelectedFiles(newFiles);
    onFilesChange?.(newFiles);

    const newPreviews: string[] = [];

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          newPreviews.push(reader.result);

          if (newPreviews.length === newFiles.length) {
            setPreviews(newPreviews);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    e.target.value = "";
  };

  const removeImage = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesChange?.(newFiles);

    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
  };

  return (
    <div className="image-uploader">
      <label htmlFor="photos" className="image-uploader-label">
        Загрузите до 3 фото
      </label>
      <input
        type="file"
        id="photos"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

      <div className="image-previews">
        {previews.map((src, idx) => (
          <div key={idx} className="image-preview-wrapper">
            <img
              src={src}
              alt={`preview ${idx + 1}`}
              className="image-preview"
            />
            <button
              type="button"
              className="image-remove-btn"
              onClick={() => removeImage(idx)}
              aria-label={`Delete photo ${idx + 1}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
