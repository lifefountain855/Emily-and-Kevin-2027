// import PhotoGallery from "@/pages/photo-wall.tsx";

export default function OurStory() {
  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Our Story
        </h1>

        <div className="mb-24 text-center max-w-2xl mx-auto">
          <img
            src="/images/couple-1.png"
            alt="Emily and Kevin"
            className="w-full aspect-[4/3] object-cover mb-8 rounded shadow-sm"
          />
          <h2 className="font-serif text-3xl text-accent mb-6">How We Met</h2>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light text-lg">
            It all started at a small coffee shop in downtown Salt Lake City.
            Kevin was struggling to find a table, and Emily graciously offered
            the empty chair across from her. What started as a polite gesture
            turned into a three-hour conversation about our shared love for
            hiking, terrible sci-fi movies, and our dreams for the future.
          </p>
          <p className="text-foreground/80 leading-relaxed font-light text-lg">
            By the time the cafe closed, we both knew this was the beginning of
            something incredibly special.
          </p>
        </div>

        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-primary mb-6">
            The Proposal
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light text-lg">
            After many adventures and hard conversations about goals and
            marriage, they went looking at rings. Eventually, they found the
            one. A beautiful, shining brilliant cut diamond set in a gold band.
            During a sunset hike to a hidden alpine lake, he completely
            surprised Emily by getting down on one knee. It was the easiest
            "yes" of her life.
          </p>
          <img
            src="/images/ring.png"
            alt="Engagement Ring"
            className="w-full aspect-[4/3] object-cover mt-8 rounded shadow-sm"
          />
        </div>
        {/* <PhotoGallery /> */}
      </div>
    </div>
  );
}
