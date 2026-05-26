import { useTheme } from "../context/ThemeContext";

const BackgroundEffects = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 mask-fade-b" />

      {/* Animated gradient blobs (toned down in light) */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-blob ${
          isLight ? "bg-accent/10" : "bg-accent/20"
        }`}
      />
      <div
        className={`absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] animate-blob ${
          isLight ? "bg-accent-light/10" : "bg-accent-light/15"
        }`}
        style={{ animationDelay: "3s" }}
      />
      <div
        className={`absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[130px] animate-blob ${
          isLight ? "bg-accent/8" : "bg-accent/15"
        }`}
        style={{ animationDelay: "6s" }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};

export default BackgroundEffects;
