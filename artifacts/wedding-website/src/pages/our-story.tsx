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
            src="https://lh3.googleusercontent.com/pw/AP1GczMSnq5Y3AGxoUkHDK6WqjKJRQRED1eCLiC2owCyPvT1bu50Aw21Nzy8SudTYAwOTrZ06JgVPgwKnuDyQk4ez6q1Z3h0gsOxh7eDjFI84FztfA8bHmg=w2048"
            //src="/images/couple-1.png"
            alt="Emily and Kevin"
            className="w-full aspect-[4/3] object-cover mb-8 rounded shadow-sm"
          />
          <h2 className="font-serif text-3xl text-accent mb-6">How We Met</h2>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light text-lg">
            It all started when Kevin returned from his mission and found Emily
            on social media (no, not Mutual). When Kevin got to Rexburg, Emily
            made the first move and invited him over for banana bread and Mario
            Kart.
          </p>
          <p className="text-foreground/80 leading-relaxed font-light text-lg">
            They hit it off well, went on their first date that week and
            have been stuck at the hip ever since. Their shared love for games, her cat Finny, and each other will keep them together -- forever.
          </p>
        </div>

        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-primary mb-6">
            The Proposal
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light text-lg">
            After many adventures and hard conversations about goals and
            marriage, they went looking at rings. Eventually, they found the
            one. A beautiful, brilliant-cut diamond set in a gold band.
            She knew the day was coming, He took her to a lovely park in a cove
            of trees, and asked her the question, getting down on one knee. It
            was the easiest "yes" of her life.
          </p>
          <img
            src="/images/ring.png"
            alt="Engagement Ring"
            className="w-full aspect-[4/3] object-cover mt-8 rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
