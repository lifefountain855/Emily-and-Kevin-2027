import { Button } from "@/components/ui/button";

export default function Registry() {
  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">Registry</h1>
        <p className="text-lg text-foreground/80 mb-16 max-w-2xl mx-auto font-light">
          Your presence at our wedding is the greatest gift we could ask for. 
          If you would like to honor us with a gift, we have registered at the following places.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <a href="#" target="_blank" rel="noreferrer" className="block group">
            <div className="bg-card border border-border p-8 h-full flex flex-col items-center justify-center hover:border-primary transition-colors shadow-sm">
              <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-4">Crate & Barrel</h3>
              <span className="text-sm tracking-widest uppercase text-muted-foreground">View Registry</span>
            </div>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="block group">
            <div className="bg-card border border-border p-8 h-full flex flex-col items-center justify-center hover:border-primary transition-colors shadow-sm">
              <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-4">Target</h3>
              <span className="text-sm tracking-widest uppercase text-muted-foreground">View Registry</span>
            </div>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="block group">
            <div className="bg-card border border-border p-8 h-full flex flex-col items-center justify-center hover:border-primary transition-colors shadow-sm">
              <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-4">Amazon</h3>
              <span className="text-sm tracking-widest uppercase text-muted-foreground">View Registry</span>
            </div>
          </a>
        </div>

        <div className="bg-secondary/10 border border-secondary/20 p-12 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-secondary-foreground mb-4">Honeymoon Fund</h2>
          <p className="text-foreground/80 mb-8 font-light">
            We are also planning a trip to Italy for our honeymoon! If you'd prefer, 
            you can contribute to our adventure fund.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground tracking-widest uppercase">
            Contribute
          </Button>
        </div>
      </div>
    </div>
  );
}
