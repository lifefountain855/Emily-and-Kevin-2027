import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2027-01-15T15:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mt-12 text-center">
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-serif text-primary">
          {timeLeft.days}
        </span>
        <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
          Days
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-serif text-primary">
          {timeLeft.hours}
        </span>
        <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
          Hours
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-serif text-primary">
          {timeLeft.minutes}
        </span>
        <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
          Mins
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-serif text-primary">
          {timeLeft.seconds}
        </span>
        <span className="text-xs tracking-widest uppercase mt-2 text-muted-foreground">
          Secs
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background">
          <img
            src="/images/hero-bg.png"
            alt=""
            aria-hidden="true"
            className="invisible absolute inset-0 w-full h-full object-cover"
            onLoad={() => setHeroLoaded(true)}
            ref={(img) => {
              if (img?.complete) setHeroLoaded(true);
            }}
          />
          {heroLoaded && (
            <div className="absolute inset-0 animate-in fade-in duration-10">
              <img
                src="/images/hero-bg.webp"
                alt="Floral background"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-background/40" />
            </div>
          )}
        </div>

        {heroLoaded && (
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 animate-in fade-in duration-1500">
            <h2 className="tracking-[0.2em] uppercase text-sm md:text-base mb-6 text-foreground/80">
              Please join us for the wedding of
            </h2>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary mb-6 leading-tight">
              Emily <span className="text-accent">&</span> Kevin
            </h1>
            <p className="text-xl md:text-2xl font-serif text-foreground/90 mb-12 italic">
              January 15, 2027 • Seattle, WA
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Link href="/rsvp" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-12 py-6 bg-secondary hover:bg-secondary/80 rounded-none tracking-widest uppercase"
                >
                  RSVP Now
                </Button>
              </Link>
              <Link href="/details" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-12 py-6 border-secondary text-secondary hover:bg-secondary/15 rounded-none tracking-widest uppercase"
                >
                  Event Details
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Welcome Section */}
      {heroLoaded && (
        <section className="py-24 md:py-32 animate-in fade-in duration-1500">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
              Welcome
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              We are so excited to celebrate with you and can't wait to share
              our special day. This website contains all the details you'll need
              for our wedding weekend. Thank you for your ongoing love and
              support!
            </p>
            <CountdownTimer />
          </div>
        </section>
      )}
    </div>
  );
}
