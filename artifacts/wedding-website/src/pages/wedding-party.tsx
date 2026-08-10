export default function WeddingParty() {
  const bridesmaids = [
    {
      name: "Jessica Smith",
      role: "Bridesmaid",
      relation: "Childhood Friend",
      img: "/images/bridesmaid.png",
      bio: "Met in 3rd grade and bonded over a shared love of art.",
    },
    {
      name: "Kiana",
      role: "Maid of Honor",
      relation: "Best Friend",
      img: "/images/bridesmaid.png",
      bio: "Kiana has been Emily's partner in crime since day one.",
    },
    {
      name: "Carla Smurthwaite",
      role: "Bridesmaid",
      relation: "Groom's Roomate's Cousin",
      img: "/images/bridesmaid.png",
      bio: "Met by chance, stayed by choice.",
    },
  ];

  const groomsmen = [
    {
      name: "Wyatt Horton",
      role: "Groomsman",
      relation: "Mission Trainee",
      img: "/images/groomsman.png",
      bio: "Kevin's favorite hiking buddy and confidant.",
    },
    {
      name: "Chris Foster",
      role: "Best Man",
      relation: "Mission Companion",
      img: "/images/groomsman.png",
      bio: "Kevin's friend, companion, and role model.",
    },
    {
      name: "Levi Forson",
      role: "Groomsman",
      relation: "College Friend",
      img: "/images/groomsman.png",
      bio: "Always the life of the party.",
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Wedding Party
        </h1>

        <div className="mb-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">
            The Bridesmaids
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bridesmaids.map((person, i) => {
              const isHonoree = person.role === "Maid of Honor";
              return (
                <div
                  key={i}
                  className={`relative bg-card border p-6 text-center shadow-sm ${
                    isHonoree ? "shadow-md" : "border-border side-cell"
                  }`}
                >
                  <img
                    src="/images/bridesmaid.png"
                    alt={person.name}
                    className={`rounded-full object-cover mx-auto mb-6 shadow ${
                      isHonoree ? "w-56 h-56" : "w-48 h-48"
                    }`}
                  />
                  <h3 className="font-serif text-2xl text-primary mb-1">
                    {person.name}
                  </h3>
                  <p className="uppercase tracking-widest text-xs text-accent mb-2">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {person.relation}
                  </p>
                  <p className="text-foreground/80 text-sm">{person.bio}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">
            The Groomsmen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groomsmen.map((person, i) => {
              const isHonoree = person.role === "Best Man";
              return (
                <div
                  key={i}
                  className={`relative bg-card border p-6 text-center shadow-sm ${
                    isHonoree ? "shadow-md" : "border-border side-cell"
                  }`}
                >
                  <img
                    src="/images/groomsman.png"
                    alt={person.name}
                    className={`rounded-full object-cover mx-auto mb-6 shadow ${
                      isHonoree ? "w-56 h-56" : "w-48 h-48"
                    }`}
                  />
                  <h3 className="font-serif text-2xl text-primary mb-1">
                    {person.name}
                  </h3>
                  <p className="uppercase tracking-widest text-xs text-accent mb-2">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {person.relation}
                  </p>
                  <p className="text-foreground/80 text-sm">{person.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
