export default function WeddingParty() {
  const bridesmaids = [
    {
      name: "Kiana Arnesen",
      role: "Maid of Honor",
      relation: "Best Friend",
      img: "/images/maidofhonor.png",
      bio: "Kiana has been Emily's best friend from college, been with her through thick and thin.",
    },
    {
      name: "Madison Liu 刘",
      role: "Bridesmaid",
      relation: "Hometown Bestie",
      img: "/images/bridesmaid.png",
      bio: "Inseperable since a YSA meet and an MLB game.",
    },
  ];

  const groomsmen = [
    {
      name: "Chris Foster",
      role: "Best Man",
      relation: "Mission Companion",
      img: "/images/bestman.png",
      bio: "Kevin's friend, companion, and role model.",
    },
    {
      name: "Wyatt Horton",
      role: "Groomsman",
      relation: "Mission Trainee",
      img: "/images/groomsman.png",
      bio: "These two together, it's a dangerous duo.",
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16">
          Wedding Party
        </h1>

        <div className="mb-24 m-5 sm:m-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">
            The Bridesmaids
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bridesmaids.map((person, i) => {
              const isHonoree = person.role === "Maid of Honor";
              return (
                <div
                  key={i}
                  className={`relative bg-card border p-6 text-center shadow-sm ${
                    isHonoree
                      ? "shadow-md border border-accent"
                      : "border-border"
                  }`}
                >
                  <img
                    src={person.img}
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

        <div className="mb-24 m-5 sm:m-24">
          <h2 className="font-serif text-4xl text-accent text-center mb-12">
            The Groomsmen
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {groomsmen.map((person, i) => {
              const isHonoree = person.role === "Best Man";
              return (
                <div
                  key={i}
                  className={`relative bg-card p-6 text-center shadow-sm ${
                    isHonoree
                      ? "shadow-md border border-accent"
                      : "border-border"
                  }`}
                >
                  <img
                    src={person.img}
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
