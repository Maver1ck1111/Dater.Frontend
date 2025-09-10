import React, { useEffect, useState } from "react";
import api from "../../../Api/Axios";
import type { ZodGUID } from "zod";
import "./ProfileCard.css";

interface Props {
  accountID: ZodGUID;
  imagePaths: string[];
}

export const ProfileAvatar: React.FC<Props> = ({ accountID, imagePaths }) => {
  const [photoURLs, setPhotoURLs] = useState<string[]>([]);

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) return;

    const loadPhotos = async () => {
      const urls: string[] = [];

      for (let i = 0; i < imagePaths.length; i++) {
        const filePath = imagePaths[i];
        if (!filePath) continue;

        try {
          const response = await api.get(
            `/profile/getPhotoByID/${accountID}/${i}`,
            { responseType: "blob" }
          );

          const file = new File([response.data], filePath, {
            type: response.data.type,
          });

          const objectURL = URL.createObjectURL(file);
          urls.push(objectURL);
        } catch {
          continue;
        }
      }

      setPhotoURLs(urls);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    };

    loadPhotos();
  }, [accountID, imagePaths]);

  if (photoURLs.length === 0) {
    return <div className="profile-photos">No photos</div>;
  }

  return (
    <div className={`profile-photos count-${photoURLs.length}`}>
      {photoURLs.map((url, i) => (
        <img key={i} src={url} alt={`Photo ${i}`} />
      ))}
    </div>
  );
};
