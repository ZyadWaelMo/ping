const SpecsSection = () => {
  const pcSpecs = [
    {
      title: "Standard",
      specs: [
        "Monitor 165 Hz",
        "CPU i5-12400F",
        "GPU RTX 1660 Super",
        "RAM 16 GB",
      ],
      price: "12 LE per hour",
    },
    {
      title: "Advanced",
      specs: [
        "Monitor 165 Hz",
        "CPU i5-12400F",
        "GPU RTX 4060",
        "RAM 16 GB",
      ],
      price: "14 LE per hour",
    },
    {
      title: "Ultimate",
      specs: [
        "Monitor 240 Hz",
        "CPU i5-12400F",
        "GPU RTX 5060",
        "RAM 16 GB",
      ],
      price: "17 LE per hour",
    },
  ];

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {pcSpecs.map((pc, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 hover:glass-card-red transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-gaming text-glow-white mb-6 text-center">
                {pc.title}
              </h3>
              <div className="space-y-3 mb-6">
                {pc.specs.map((spec, i) => (
                  <p key={i} className="text-xs md:text-sm font-gaming text-center">
                    {spec}
                  </p>
                ))}
              </div>
              <p className="text-sm md:text-base font-gaming text-primary text-glow-red text-center">
                {pc.price}
              </p>
            </div>
          ))}
        </div>
        
        <div className="glass-card rounded-lg p-6 hover:glass-card-red transition-all duration-300">
          <h3 className="text-lg md:text-xl font-gaming text-glow-white mb-4 text-center">
            Maximize Your Game Time with PING Accounts!
          </h3>
          <p className="text-xs md:text-sm font-gaming mb-4 leading-relaxed">
            Unlock instant playtime with our tiered top-up bonuses. The more you load, the more free gaming time you earn.
          </p>
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-gaming">
              <span className="text-primary">Starter Boost:</span> Load 50 LE and get 65 LE total credit.
            </p>
            <p className="text-xs md:text-sm font-gaming">
              <span className="text-primary">Mid-Tier Multiplier:</span> Load 100 LE and instantly receive 140 LE to spend!
            </p>
            <p className="text-xs md:text-sm font-gaming">
              <span className="text-primary">Ultimate Value:</span> Load 200 LE and receive a massive 280 LE total credit.
            </p>
            <p className="text-xs md:text-sm font-gaming">
              <span className="text-primary">Keep Growing:</span> Receive an extra 40 LE bonus credit for every subsequent 100 LE you top up after the 200 LE tier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
