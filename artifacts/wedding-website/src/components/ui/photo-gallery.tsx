import React, { useState, useEffect } from "react";

const WORKER_URL = "https://google-photos.kevgumball.workers.dev";

export default function PhotoGallery({ albumUrl }) {
  const [photos, setPhotos] = useState([]);
  const [failedPhotoIds, setFailedPhotoIds] = useState(new Set());
  const [activePhoto, setActivePhoto] = useState(null); // Lightbox state
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
      setFailedPhotoIds(new Set());

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

  // Handle keyboard shortcut (Escape key) to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleImageError = (id) => {
    setFailedPhotoIds((prev) => new Set(prev).add(id));
  };

  if (!albumUrl) {
    return (
      <div className="mt-12 text-center text-2xl text-red-600">
        Internal Error: Please provide an album URL.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mt-12 text-center text-2xl text-gray-600 font-sans">
        Loading album...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 text-center text-2xl text-red-600 font-sans">
        {error}
      </div>
    );
  }

  const visiblePhotos = photos.filter((photo) => !failedPhotoIds.has(photo.id));

  if (visiblePhotos.length === 0) {
    return (
      <div className="mt-12 text-center text-2xl text-gray-600 font-sans">
        No photos found in this album.
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      {/* Grid View */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {visiblePhotos.map((photo) => (
          <img
            key={photo.id}
            src={`${photo.baseUrl}=w500-h500-c`}
            alt="Gallery item"
            onError={() => handleImageError(photo.id)}
            onClick={() => setActivePhoto(photo)}
            className="w-full h-[250px] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-pointer select-none"
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 focus:outline-none z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Close photo"
          >
            ✕
          </button>

          {/* Enlarged Image Container */}
          <div className="flex items-center justify-center w-full h-full max-w-[92vw] max-h-[90vh]">
            <img
              // =w2048 requests a high-res version from Google Photos
              src={`${activePhoto.baseUrl}=w2048`}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-md shadow-2xl transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}
