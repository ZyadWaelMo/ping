const AnimatedBackground = () => {
  const icons = ['◆', '▲', '●', '■', '★', '◀', '▶', '♦', '♠', '♣', '▼', '◆', '⬟', '⬢', '⬣', '◈'];
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animation: `float ${Math.random() * 6 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
