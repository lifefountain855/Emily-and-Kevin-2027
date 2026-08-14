import PhotoGallery from "@/components/ui/photo-gallery.tsx";

export default function PhotoWall() {
  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Photo Wall
        </h1>
        <p className="font-serif text-4xl md:text-5xl text-secondary text-center m-5 mt-20">
          Us!
        </p>
        <PhotoGallery
          albumUrl={"https://photos.app.goo.gl/HqEgiZUMz9x8vTBp7"}
        />
        <p className="font-serif text-4xl md:text-5xl text-accent text-center m-5 mt-20">
          Wedding!
        </p>
        <PhotoGallery
          albumUrl={"https://photos.app.goo.gl/rW7DBNy2ny12DQgN8"}
        />
        <p className="font-serif text-4xl md:text-5xl text-secondary text-center m-5 mt-20">
          Reception!
        </p>
        <PhotoGallery
          albumUrl={"https://photos.app.goo.gl/G86PzJQkyFgg4p747"}
        />
      </div>
    </div>
  );
}
