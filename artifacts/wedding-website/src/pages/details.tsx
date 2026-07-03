import { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";

export default function Details() {
  const [sealingInvited, setSealingInvited] = useState(false);

  useEffect(() => {
    setSealingInvited(getCookie("sealing_invited") === "1");
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Event Details
        </h1>

        {sealingInvited && (
          <div className="mb-24">
            <div className="bg-card p-8 border border-border shadow-sm max-w-xl mx-auto">
              <h2 className="font-serif text-3xl text-accent mb-2">
                Sealing Ceremony
              </h2>
              <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">
                Saturday, 11:00 AM &bull; Immediate Family Only
              </p>
              <div className="mb-6 space-y-2 text-foreground/80">
                <p className="font-medium">Salt Lake City Temple</p>
                <p>50 W North Temple St</p>
                <p>Salt Lake City, UT 84150</p>
              </div>
              <div className="aspect-video bg-muted relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium tracking-wide uppercase">
                    Map Placeholder
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mt-6">
                You're receiving these details because you were personally
                invited to this private ceremony. We're so grateful to share
                this sacred moment with you.
              </p>
            </div>
          </div>
        )}

        {/* Venues */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-card p-8 border border-border shadow-sm">
            <h2 className="font-serif text-3xl text-accent mb-2">
              Ring Ceremony
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">
              3:00 PM
            </p>
            <div className="mb-6 space-y-2 text-foreground/80">
              <p className="font-medium">The Grand Conservatory</p>
              <p>123 Botanical Way</p>
              <p>Salt Lake City, UT 84101</p>
            </div>
            <div className="aspect-video bg-muted relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <p className="text-primary font-medium tracking-wide uppercase">
                  Map Placeholder
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 border border-border shadow-sm">
            <h2 className="font-serif text-3xl text-accent mb-2">Reception</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">
              5:30 PM - 10:30 PM
            </p>
            <div className="mb-6 space-y-2 text-foreground/80">
              <p className="font-medium">The Highland Estate</p>
              <p>456 Mountain View Drive</p>
              <p>Salt Lake City, UT 84108</p>
            </div>
            <div className="aspect-video bg-muted relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <p className="text-primary font-medium tracking-wide uppercase">
                  Map Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="font-serif text-4xl text-primary text-center mb-12">
            Weekend Timeline
          </h2>
          <div className="max-w-2xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              {
                time: "Friday, 6:00 PM",
                title: "Welcome Gathering",
                desc: "For out-of-town guests and family.",
              },
              {
                time: "Saturday, 11:00 AM",
                title: "Sealing Ceremony",
                desc: "Private ceremony for immediate family.",
              },
              {
                time: "Saturday, 3:00 PM",
                title: "Ring Ceremony",
                desc: "Open to all guests. Please arrive 15 minutes early.",
              },
              {
                time: "Saturday, 5:30 PM",
                title: "Reception Begins",
                desc: "Light hors d'oeuvres and drinks.",
              },
              {
                time: "Saturday, 6:30 PM",
                title: "Dinner Served",
                desc: "A formal sit-down dinner.",
              },
              {
                time: "Saturday, 8:00 PM",
                title: "Dancing",
                desc: "Bring your dancing shoes!",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow text-primary font-serif">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-border bg-card shadow-sm">
                  <div className="flex flex-col mb-1">
                    <span className="font-serif text-xl text-primary">
                      {item.title}
                    </span>
                    <span className="text-sm tracking-wider uppercase text-muted-foreground mt-1">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-foreground/80 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel & Dress Code */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-[#7088a90d]">
            <h2 className="font-serif text-3xl mb-6 text-primary">
              Dress Code
            </h2>
            <p className="text-foreground/80 mb-4">
              <strong>Formal / Cocktail Attire</strong>
            </p>
            <p className="text-foreground/80 mb-4">
              We request formal or cocktail attire for our celebration. The
              venues are primarily indoors, but the Ring Ceremony has an outdoor
              garden component.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Layers are recommended as January in Utah is cold.</li>
              <li>Block heels or flats are suggested for the garden paths.</li>
            </ul>
          </div>

          <div className="bg-primary/5 p-8">
            <h2 className="font-serif text-3xl text-primary mb-6">
              Travel & Stay
            </h2>
            <div className="space-y-6 text-foreground/80">
              <div>
                <h3 className="font-medium text-lg mb-1">Nearest Airport</h3>
                <p>
                  Salt Lake City International (SLC) — 15 mins from downtown.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Hotel Block</h3>
                <p>The Grand America Hotel</p>
                <a
                  href="#"
                  className="text-primary underline mt-1 inline-block"
                >
                  Book with our group rate
                </a>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Transportation</h3>
                <p>
                  We recommend using rideshare (Uber/Lyft). Limited parking is
                  available at both venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
