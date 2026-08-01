import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/lib/localStorage.ts";
import WebRSVP from "@/pages/rsvp-web";

const USER = UserProfile.initLoad();

let rsvpPassed = 0;

const passedDate = new Date(2026, 7, 3); // 6 is july
// initial check
const now = new Date();
if (now >= passedDate) {
  console.log("Timer stopped.");
  rsvpPassed = 1;
} //
if (rsvpPassed == 0) {
  let count = 0;
  const dateTimer = setInterval(() => {
    const now = new Date();
    console.log(`Checking ${now.toLocaleDateString()}...`);
    count++;

    // Stop running after 50 checks
    if (count >= 50) {
      clearInterval(dateTimer);
      console.log("Timer stopped.");
    }
    if (now >= passedDate) {
      rsvpPassed = 1;
    }
    if (rsvpPassed == 1) {
      clearInterval(dateTimer);
      console.log("Timer stopped.");
    }
  }, 5000);
}

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [returningGuest, setReturningGuest] = useState(false);

  useEffect(() => {
    if (USER.rsvp == true) {
      setSubmitted(true);
      setReturningGuest(true);
    } else {
      setSubmitted(false);
      setReturningGuest(false);
    }
  }, []);

  const handleSubmit = () => {
    USER.rsvp = true;
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">
          RSVP
        </h1>
        <br></br>
        <br></br>
        {rsvpPassed == 1 && (
          <div>
            <p className="text-4xl font-serif text-accent mb-12">
              RSVP has passed. Please contact us at kevinandemilysapp@gmail.com
            </p>
            <h2 className="font-serif text-3xl text-primary mb-4">
              {returningGuest && submitted ? "Welcome Back!" : "Thank You!"}
            </h2>
            <p className="text-foreground/80 mb-6">
              {returningGuest && submitted
                ? "We already have your RSVP on file. We are so excited to celebrate with you!"
                : "Your RSVP has been received. We are so excited to celebrate with you!"}
            </p>
          </div>
        )}
        {rsvpPassed == 0 && (
          <div>
            <p className="text-lg text-foreground/80 mb-2">
              Please let us know if you'll be celebrating with us by
            </p>
            <p className="text-2xl font-serif text-accent mb-12">
              November 15th
            </p>
          </div>
        )}
        {submitted && rsvpPassed == 0 && (
          <div className="bg-card p-12 border border-border shadow-sm max-w-lg mx-auto">
            <h2 className="font-serif text-3xl text-primary mb-4">
              {returningGuest ? "Welcome Back!" : "Thank You!"}
            </h2>
            <p className="text-foreground/80 mb-6">
              {returningGuest
                ? "We already have your RSVP on file. We are so excited to celebrate with you!"
                : "Your RSVP has been received. We are so excited to celebrate with you!"}
            </p>
          </div>
        )}
        {rsvpPassed == 0 && !submitted && (
          <div className="bg-card p-8 border border-border shadow-sm">
            {/* Placeholder for Google Form */}
            <div className="aspect-[4/3] md:aspect-[3/4] bg-muted relative mb-6 flex flex-col items-center justify-center p-8 text-center">
              {/* <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
                Google Form Embedded Here
              </p> */}
              <WebRSVP />
              <Button
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90 text-primary-foreground tracking-wider uppercase"
              >
                Simulate Submit
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Having trouble? Contact us at kevinandemilysapp@gmail.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
