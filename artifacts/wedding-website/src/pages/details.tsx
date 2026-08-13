import { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";
import { UserProfile } from "@/lib/localStorage.ts";

const USER = UserProfile.initLoad();

export default function Details() {
  // const [sealingInvited, setSealingInvited] = useState(false);
  const [invitationLevel, setInvitationLevel] = useState(0);

  useEffect(() => {
    // setSealingInvited(getCookie("sealing_invited") === "1");
    setInvitationLevel(USER.invite);
  }, []);
  const events = [
    {
      time: "12:00 PM",
      title: "Ring Ceremony",
      desc: "By invite only. Please be seated 15 minutes early.",
    },
    {
      time: "2:30 AM",
      title: "Sealing Ceremony",
      desc: "Private ceremony for immediate family.",
    },
    {
      time: "6:30 PM",
      title: "Reception Begins",
      desc: "Speeches, special dances, and cake.",
    },
    {
      time: "7:45 PM",
      title: "Dancing",
      desc: "Bring your dancing shoes!",
    },
    {
      time: "9:00 PM",
      title: "Send-Off",
      desc: "Rice? Sparklers? Bring it!",
    },
  ];
  const withoutSealing = [...events];
  withoutSealing.splice(1, 1);

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Event Details
        </h1>

        {invitationLevel == 2 && (
          <div className="mb-24">
            <div className="bg-card p-8 border border-border shadow-sm max-w-xl mx-auto">
              <h2 className="font-serif text-3xl text-accent mb-2">
                Sealing Ceremony
              </h2>
              <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">
                Friday, 11:00 AM &bull; Invite Only
              </p>
              <div className="mb-6 space-y-2 text-foreground/80">
                <p className="font-medium">Seattle Washington Temple</p>
                <p>2808 148th Ave SE</p>
                <p>Bellevue, WA 98007</p>
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
              12 PM
            </p>
            <div className="mb-6 space-y-2 text-foreground/80">
              <p className="font-medium">Redmond Ridge Events Center</p>
              <p>10315 NE Cedar Park Cres</p>
              <p>Redmond, WA 98053</p>
            </div>
            <div className="aspect-video bg-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-card flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.7964815759433!2d-122.04508214433716!3d47.69060753841981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907346551111e3%3A0x4d8a1143d873e8e7!2sRedmond%20Ridge%20Community%20and%20Event%20Center!5e1!3m2!1sen!2sus!4v1785621669959!5m2!1sen!2sus"
                  width="350"
                  height="200"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 border border-border shadow-sm">
            <h2 className="font-serif text-3xl text-accent mb-2">Reception</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-6">
              6:30 PM - 10:00 PM
            </p>
            <div className="mb-6 space-y-2 text-foreground/80">
              <p className="font-medium">
                Church of Jesus Christ of Latter-Day Saints
              </p>
              <p>15205 SE 28th St</p>
              <p>Bellevue, WA 98007</p>
            </div>
            <div className="aspect-video bg-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-card flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.4249013492863!2d-122.1411637709548!3d47.58453267664972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906e9fec812ff5%3A0x2b9eb977e80a67f2!2sThe%20Church%20of%20Jesus%20Christ%20of%20Latter-day%20Saints!5e1!3m2!1sen!2sus!4v1785621160608!5m2!1sen!2sus"
                  width="350"
                  height="180"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        {invitationLevel == 2 && (
          <div className="mb-24">
            <h2 className="font-serif text-4xl text-primary text-center mb-12">
              Day Timeline
            </h2>
            <p className="font-serif text-l text-center mb-12">
              All events are on friday.
            </p>
            <div className="max-w-2xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {events.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between group is-active mb-8"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 shadow text-primary font-serif">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] p-6 rounded border border-border bg-card shadow-sm">
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
        )}

        {invitationLevel != 2 && (
          <div className="mb-24">
            <h2 className="font-serif text-4xl text-primary text-center mb-2">
              Day Timeline
            </h2>
            <p className="font-serif text-l text-center mb-12">
              All events are on friday.
            </p>
            <div className="max-w-2xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {withoutSealing.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between group is-active mb-8"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 shadow text-primary font-serif">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] p-6 rounded border border-border bg-card shadow-sm">
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
        )}

        {/* Travel & Dress Code */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-primary/5 p-8">
            <h2 className="font-serif text-3xl text-primary mb-6">
              Dress Code
            </h2>
            <div className="space-y-6 text-foreground/80">
              <div>
                <h3 className="font-medium text-lg mb-1">Formal / Cocktail</h3>
                <p>
                  We request formal or cocktail attire for our celebration. The
                  venues are primarily indoors, but the Ring Ceremony has an
                  outdoor garden component.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Snow / Rain</h3>
                <p>
                  Layers and coats are recommended as January in Washington is
                  cold, and there is a chance of snow and rain.
                </p>
              </div>
            </div>
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
