export default function WeddingParty() {
  const bridesmaids = [
    { name: "Sarah Jenkins", role: "Maid of Honor", relation: "Sister of the Bride", bio: "Sarah has been Emily's partner in crime since day one." },
    { name: "Jessica Smith", role: "Bridesmaid", relation: "Childhood Friend", bio: "Met in 3rd grade and bonded over a shared love of art." },
    { name: "Amanda Lee", role: "Bridesmaid", relation: "College Roommate", bio: "Survived finals week together on nothing but coffee." },
  ];

  const groomsmen = [
    { name: "Michael Sapp", role: "Best Man", relation: "Brother of the Groom", bio: "Kevin's older brother and lifelong role model." },
    { name: "David Chen", role: "Groomsman", relation: "Best Friend", bio: "Kevin's favorite hiking buddy and confidant." },
    { name: "Robert Taylor", role: "Groomsman", relation: "College Friend", bio: "Always the life of the party." },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">Wedding Party</h1>
        
        <div className="mb-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">The Bridesmaids</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bridesmaids.map((person, i) => (
              <div key={i} className="bg-card border border-border p-6 text-center shadow-sm">
                <img src="/images/bridesmaid.png" alt={person.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow" />
                <h3 className="font-serif text-2xl text-primary mb-1">{person.name}</h3>
                <p className="uppercase tracking-widest text-xs text-accent mb-2">{person.role}</p>
                <p className="text-sm text-muted-foreground italic mb-4">{person.relation}</p>
                <p className="text-foreground/80 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">The Groomsmen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groomsmen.map((person, i) => (
              <div key={i} className="bg-card border border-border p-6 text-center shadow-sm">
                <img src="/images/groomsman.png" alt={person.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow" />
                <h3 className="font-serif text-2xl text-primary mb-1">{person.name}</h3>
                <p className="uppercase tracking-widest text-xs text-accent mb-2">{person.role}</p>
                <p className="text-sm text-muted-foreground italic mb-4">{person.relation}</p>
                <p className="text-foreground/80 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
