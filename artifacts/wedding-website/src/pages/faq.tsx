import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Are children invited?",
      answer: "Children are more than welcome to join us for the ring ceremony and reception!"
    },
    {
      question: "What is the dress code?",
      answer: "We request formalattire. Keep in mind that Washington can be chilly in January, and it may snow or rain so bring warm layers."
    },
    {
      question: "Where should I park?",
      answer: "There is free parking is at both venues."
    },
    {
      question: "Can I bring a plus one?",
      answer: "Due to venue capacity, we are only able to accommodate guests whose names are explicitly stated on the invitation envelope. (Unless otherwise instructed.)"
    },
    {
      question: "What time should I arrive?",
      answer: "For the ring ceremony, please arrive by 5:15 PM to ensure you are seated before the ceremony begins at 5:30 PM."
    },
    {
      question: "When is the RSVP deadline?",
      answer: "Please RSVP by November 15th so we can finalize numbers for the venue and food."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">Questions & Answers</h1>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
              <AccordionTrigger className="font-serif text-xl text-foreground hover:text-secondary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
