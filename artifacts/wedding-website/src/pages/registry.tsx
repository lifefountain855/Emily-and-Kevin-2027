import { Button } from "@/components/ui/button";

export default function Registry() {
  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">
          Registry
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 bg-primary/20 border border-primary/20 p-12 max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-2xl text-primary">Zola</h2>
          <p className="text-lg text-foreground/80 font-light">
            Your presence at our wedding is the most greatest gift we could ask
            for. If you would like to honor us with a gift, we have registered
            with Zola, which has its own list and also links to external sites like Amazon.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-secondary/20 border border-secondary/20 p-12 max-w-2xl mx-auto my-5">
          <h2 className="font-serif font-bold text-2xl text-secondary">
            Honeymoon Fund
          </h2>
          <p className="text-lg text-foreground/80 font-light">
            We are also planning a trip to Italy or Greece for our honeymoon! If
            you'd prefer, you can contribute to our adventure fund (also on
            Zola).
          </p>
        </div>

        <div className="grid place-items-center mt-15 max-w-xl mx-auto">
          <a
            href="https://www.zola.com/registry/kevinandemilyjanuary16"
            target="_blank"
            rel="noreferrer noopener"
            className="block group w-[100%] aspect-[8/3]"
          >
            <div className="bg-card border border-border h-full gap-1 p-8 flex flex-col items-center justify-center hover:border-secondary hover:border-2 transition-colors shadow-sm">
              <h2 className="font-serif text-3xl text-foreground group-hover:text-secondary transition-colors mb-4">
                Zola
              </h2>
              <span className="text-sm tracking-widest uppercase text-muted-foreground">
                View Registry and Fund
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
