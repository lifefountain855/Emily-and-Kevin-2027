import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import { UserProfile } from "@/lib/localStorage.ts";

const USER = UserProfile.initLoad();

let rsvpPassed = 0;

const passedDate = new Date(2026, 10, 15); // 10 is nov
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

const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbyLWRAH4EBAjdRh0GSX17V5ALdTQ-NOwdYpyqs3Lc6LzU8NZFGlVXO_8oc2fEVQiEk_/exec";

interface RSVPFormData {
  fullName: string;
  email: string;
  phone: string;
  attending: "yes" | "plus_one" | "no" | "";
  guestName: string;
  dietary: string;
  note: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  guestName?: string;
}

const REGEX_PATTERNS = {
  fullName: /^[a-zA-Z\s\-']{2,50}$/,
  guestName: /^[a-zA-Z]+( [a-zA-Z]+)?(, [a-zA-Z]+( [a-zA-Z]+)?)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(\+?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
};

export default function Rsvp() {
  // **********************************
  const [submitted, setSubmitted] = useState(false);
  const [returningGuest, setReturningGuest] = useState(false);
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: "",
    email: "",
    phone: "",
    attending: "",
    guestName: "",
    dietary: "",
    note: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Field validation function
  const validateField = (
    name: keyof FormErrors,
    value: string,
  ): string | undefined => {
    if (!value.trim()) return "This field is required.";

    const pattern = REGEX_PATTERNS[name];
    if (pattern && !pattern.test(value.trim())) {
      switch (name) {
        case "fullName":
        case "guestName":
          return "Please enter a valid name (letters only).";
        case "email":
          return "Please enter a valid email address.";
        case "phone":
          return "Please enter a valid 10-digit phone number.";
        default:
          return "Invalid input format.";
      }
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error validation for fields with regex rules
    if (name in REGEX_PATTERNS) {
      const fieldError = validateField(name as keyof FormErrors, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };
  useEffect(() => {
    if (USER.rsvp == true) {
      setSubmitted(true);
      setReturningGuest(true);
    } else {
      setSubmitted(false);
      setReturningGuest(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    USER.rsvp = true;
    setSubmitted(true);

    // Validate required fields based on state
    const newErrors: FormErrors = {};
    const fullNameErr = validateField("fullName", formData.fullName);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);

    if (fullNameErr) newErrors.fullName = fullNameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;

    if (formData.attending === "plus_one") {
      const guestErr = validateField("guestName", formData.guestName);
      if (guestErr) newErrors.guestName = guestErr;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!formData.attending) {
      alert("Please select your attendance status.");
      return;
    }

    setIsSubmitting(true);

    try {
      // POST payload to Google Apps Script
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Prevents CORS preflight issues with Apps Script
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("RSVP Submission Error:", err);
      setSubmitError("Failed to submit your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              {returningGuest && submitted
                ? "Welcome Back!"
                : submitted && "Thank You!"}
            </h2>
            <p className="text-foreground/80 mb-6">
              {returningGuest && submitted
                ? "We already have your RSVP on file. We are so excited to celebrate with you!"
                : submitted &&
                  "Your RSVP has been received. We are so excited to celebrate with you!"}
            </p>
          </div>
        )}
        {rsvpPassed == 0 && (
          <div>
            <p className="text-lg text-foreground/80 mb-2">
              Please let us know if you'll be celebrating with us by
            </p>
            <p className="text-4xl font-serif text-accent mb-12">
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
          <div>
            <div>
              {!isSubmitted && (
                <div
                  className="max-w-lg mx-auto p-8 rounded-md shadow-sm border border-[hsl(var(--card-border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]"
                  style={{ fontFamily: "var(--app-font-sans)" }}
                >
                  {submitError && (
                    <div className="mb-4 p-3 rounded bg-[hsl(var(--destructive)/0.1)] border border-[hsl(var(--destructive))] text-[hsl(var(--destructive))] text-sm">
                      {submitError}
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                        Full Name{" "}
                        <span className="text-[hsl(var(--accent))]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className={`w-full p-2.5 rounded border text-sm transition-colors bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] ${
                          errors.fullName
                            ? "border-[hsl(var(--destructive))]"
                            : "border-[hsl(var(--input))]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-[hsl(var(--destructive))]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                        Email Address{" "}
                        <span className="text-[hsl(var(--accent))]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className={`w-full p-2.5 rounded border text-sm transition-colors bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] ${
                          errors.email
                            ? "border-[hsl(var(--destructive))]"
                            : "border-[hsl(var(--input))]"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[hsl(var(--destructive))]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                        Phone Number{" "}
                        <span className="text-[hsl(var(--accent))]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className={`w-full p-2.5 rounded border text-sm transition-colors bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] ${
                          errors.phone
                            ? "border-[hsl(var(--destructive))]"
                            : "border-[hsl(var(--input))]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[hsl(var(--destructive))]">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Attendance Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                        Will you be attending?{" "}
                        <span className="text-[hsl(var(--accent))]">*</span>
                      </label>
                      <select
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border border-[hsl(var(--input))] text-sm bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                      >
                        <option value="" disabled>
                          Select an option...
                        </option>
                        <option value="yes">I'll be there!</option>
                        <option value="plus_one">
                          I'll be there! (+guests)
                        </option>
                        <option value="no">Can't make it.</option>
                      </select>
                    </div>

                    {/* CONDITIONAL STEP: Plus One Details */}
                    {formData.attending === "plus_one" && (
                      <div className="pt-2 transition-all duration-300">
                        <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                          Guests' Full Names{" "}
                          <span className="text-[hsl(var(--accent))]">*</span>
                        </label>
                        <input
                          type="text"
                          name="guestName"
                          value={formData.guestName}
                          onChange={handleChange}
                          placeholder="Full names of spouse, children, and +1 (if instructed)"
                          className={`w-full p-2.5 rounded border text-sm bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] ${
                            errors.guestName
                              ? "border-[hsl(var(--destructive))]"
                              : "border-[hsl(var(--input))]"
                          }`}
                        />
                        {errors.guestName && (
                          <p className="mt-1 text-xs text-[hsl(var(--destructive))]">
                            {errors.guestName}
                          </p>
                        )}
                      </div>
                    )}

                    {/* CONDITIONAL STEP: Dietary Preferences */}
                    {(formData.attending === "yes" ||
                      formData.attending === "plus_one") && (
                      <div className="pt-2 transition-all duration-300">
                        <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                          Dietary Restrictions or Allergies
                        </label>
                        <textarea
                          name="dietary"
                          rows={2}
                          value={formData.dietary}
                          onChange={handleChange}
                          placeholder="e.g. Vegetarian, Gluten-Free, Nut Allergy"
                          className="w-full p-2.5 rounded border border-[hsl(var(--input))] text-sm bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                        />
                      </div>
                    )}

                    {/* CONDITIONAL STEP: Decline Note */}
                    {formData.attending === "no" && (
                      <div className="pt-2 transition-all duration-300">
                        <label className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]">
                          Message for the Couple (Optional)
                        </label>
                        <textarea
                          name="note"
                          rows={2}
                          value={formData.note}
                          onChange={handleChange}
                          placeholder="Send your warm wishes..."
                          className="w-full p-2.5 rounded border border-[hsl(var(--input))] text-sm bg-[hsl(var(--card))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                        />
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-3 px-4 rounded text-sm font-semibold tracking-wide transition-colors bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Response"}
                    </button>
                  </form>
                </div>
              )}
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
