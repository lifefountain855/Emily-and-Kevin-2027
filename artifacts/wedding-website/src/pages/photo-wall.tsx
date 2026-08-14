import React, { useState, useEffect } from "react";

const WORKER_URL = "https://google-photos.kevgumball.workers.dev";

export default function PhotoGallery({
  albumUrl = "https://photos.app.goo.gl/HqEgiZUMz9x8vTBp7",
}) {
  const [photos, setPhotos] = useState([]);
  const [failedPhotoIds, setFailedPhotoIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!albumUrl) {
      setLoading(false);
      return;
    }

    const fetchAlbum = async () => {
      setLoading(true);
      setError(null);
      setFailedPhotoIds(new Set()); // Reset failed images on new URL

      try {
        const requestUrl = `${WORKER_URL}?albumUrl=${encodeURIComponent(albumUrl)}`;
        const response = await fetch(requestUrl);

        if (!response.ok) {
          throw new Error(`Worker responded with status: ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.error("Failed fetching photo list from proxy:", err);
        setError("Failed to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [albumUrl]);

  // Handler to hide an image if loading fails
  const handleImageError = (id) => {
    setFailedPhotoIds((prev) => new Set(prev).add(id));
  };

  if (!albumUrl) {
    return (
      <div className="mt-25 text-center text-lg text-gray-500">
        Please provide an album URL.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mt-25 text-center text-lg text-gray-600 font-sans">
        Loading album...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-25 text-center text-lg text-red-600 font-sans">
        {error}
      </div>
    );
  }

  // Filter out any photos that failed to load
  const visiblePhotos = photos.filter((photo) => !failedPhotoIds.has(photo.id));

  if (visiblePhotos.length === 0) {
    return (
      <div className="mt-25 text-center text-lg text-gray-600 font-sans">
        No photos found in this album.
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5 mt-25">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {visiblePhotos.map((photo) => (
          <img
            key={photo.id}
            src={`${photo.baseUrl}=w500-h500-c`}
            alt="Gallery item"
            onError={() => handleImageError(photo.id)}
            className="w-full h-[250px] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          />
        ))}
      </div>
    </div>
  );
}
