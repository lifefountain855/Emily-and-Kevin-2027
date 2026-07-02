import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Are children invited?",
      answer: "We love your little ones! However, we have decided to keep our ceremony an adults-only event. Children are more than welcome to join us for the reception following the ceremony."
    },
    {
      question: "What is the dress code?",
      answer: "We request formal or cocktail attire. Keep in mind that Utah can be quite chilly in January, so please bring warm layers. The ring ceremony will have some outdoor garden components, so block heels or flats are recommended."
    },
    {
      question: "Where should I park?",
      answer: "Limited parking is available at both the ceremony and reception venues. We highly encourage using rideshare services like Uber or Lyft."
    },
    {
      question: "Can I bring a plus one?",
      answer: "Due to venue capacity, we are only able to accommodate guests whose names are explicitly stated on the invitation envelope."
    },
    {
      question: "What time should I arrive?",
      answer: "For the ring ceremony, please arrive by 2:45 PM to ensure you are seated before the ceremony begins at 3:00 PM."
    },
    {
      question: "Will there be options for dietary restrictions?",
      answer: "Yes, our caterer can accommodate a variety of dietary needs. Please make sure to note any specific restrictions when you RSVP."
    },
    {
      question: "When is the RSVP deadline?",
      answer: "Please RSVP by November 15th so we can finalize our numbers with the caterer and venue."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">Questions & Answers</h1>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-2">
              <AccordionTrigger className="font-serif text-xl text-foreground hover:text-primary transition-colors text-left">
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
