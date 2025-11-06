import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-gaming text-glow-white mb-8 text-center">
        PING
      </h1>
      <img 
        src={logo} 
        alt="PING Logo" 
        className="w-48 h-auto md:w-64 lg:w-80 mb-8"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.4))'
        }}
      />
      <p className="text-sm md:text-base lg:text-lg font-gaming text-center mb-2 max-w-2xl">
        PC Gaming Center based in Hadaek Al Qoba
      </p>
      <p className="text-xs md:text-sm lg:text-base font-gaming text-primary text-center">
        The Ultimate Experience
      </p>
    </section>
  );
};

export default HeroSection;
