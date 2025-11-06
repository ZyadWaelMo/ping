const GamesSection = () => {
  const games = [
    "League of Legends",
    "Valorant",
    "PUBG",
    "GTA",
    "FIFA",
    "Call of Duty Warzone",
    "Dota 2",
    "The Finals",
    "Marvel Rivals",
    "Fragpunk",
  ];

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="relative">
        <div className="flex gap-8">
          <div className="flex shrink-0 items-center gap-8 animate-scroll">
            {games.map((game, index) => (
              <span
                key={`left-${index}`}
                className="text-2xl md:text-4xl lg:text-5xl font-gaming text-primary whitespace-nowrap"
              >
                {game}
              </span>
            ))}
            {games.map((game, index) => (
              <span
                key={`right-${index}`}
                className="text-2xl md:text-4xl lg:text-5xl font-gaming text-primary whitespace-nowrap"
              >
                {game}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-8 animate-scroll">
            {games.map((game, index) => (
              <span
                key={`left2-${index}`}
                className="text-2xl md:text-4xl lg:text-5xl font-gaming text-primary whitespace-nowrap"
              >
                {game}
              </span>
            ))}
            {games.map((game, index) => (
              <span
                key={`right2-${index}`}
                className="text-2xl md:text-4xl lg:text-5xl font-gaming text-primary whitespace-nowrap"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm md:text-base font-gaming mt-8 text-muted-foreground">
        and many many more!
      </p>
    </section>
  );
};

export default GamesSection;
