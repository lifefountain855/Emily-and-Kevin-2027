import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getCookie, setCookie, deleteCookie } from "@/lib/cookies";

const RSVP_COOKIE = "rsvp_submitted";

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [returningGuest, setReturningGuest] = useState(false);

  useEffect(() => {
    if (getCookie(RSVP_COOKIE) === "1") {
      setSubmitted(true);
      setReturningGuest(true);
    }
  }, []);

  const handleSubmit = () => {
    setCookie(RSVP_COOKIE, "1");
    setSubmitted(true);
  };

  const handleUpdateResponse = () => {
    deleteCookie(RSVP_COOKIE);
    setSubmitted(false);
    setReturningGuest(false);
  };

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">RSVP</h1>
        
        <p className="text-lg text-foreground/80 mb-2">
          Please let us know if you'll be celebrating with us by
        </p>
        <p className="text-2xl font-serif text-accent mb-12">November 15th</p>

        {submitted ? (
          <div className="bg-card p-12 border border-border shadow-sm max-w-lg mx-auto">
            <h2 className="font-serif text-3xl text-primary mb-4">
              {returningGuest ? "Welcome Back!" : "Thank You!"}
            </h2>
            <p className="text-foreground/80 mb-6">
              {returningGuest
                ? "We already have your RSVP on file. We are so excited to celebrate with you!"
                : "Your RSVP has been received. We are so excited to celebrate with you!"}
            </p>
            <button
              onClick={handleUpdateResponse}
              className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Need to update your response?
            </button>
          </div>
        ) : (
          <div className="bg-card p-8 border border-border shadow-sm">
            {/* Placeholder for Google Form */}
            <div className="aspect-[4/3] md:aspect-[3/4] bg-muted relative mb-6 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
                Google Form Embedded Here
              </p>
              <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground tracking-wider uppercase">
                Simulate Submit
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Having trouble? Contact us at hello@emilyandkevin2027.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
