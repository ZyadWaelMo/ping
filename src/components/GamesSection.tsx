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
        <div className="flex animate-[scroll-fast_15s_linear_infinite] will-change-transform">
          <div className="flex whitespace-nowrap">
            {[...games, ...games].map((game, index) => (
              <span
                key={index}
                className="text-2xl md:text-4xl lg:text-5xl font-gaming text-primary mx-8"
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
