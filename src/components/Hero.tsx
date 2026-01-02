import { ArrowDown, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-0 noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 max-w-4xl">
        {/* Status indicator */}
        <div className="opacity-0 animate-fade-up stagger-1 flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground font-medium tracking-wide">
            Open to opportunities
          </span>
        </div>

        {/* Main headline */}
        <h1 className="opacity-0 animate-fade-up stagger-2 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">Mrityunjay Kumar</span>
        </h1>

        {/* Role descriptor */}
        <p className="opacity-0 animate-fade-up stagger-3 text-xl sm:text-2xl lg:text-3xl font-display font-light text-muted-foreground mb-8 max-w-2xl">
          Building intelligent systems at the intersection of{" "}
          <span className="gradient-text font-medium">AI</span>,{" "}
          <span className="gradient-text font-medium">Cloud</span>, and{" "}
          <span className="gradient-text font-medium">Web3</span>
        </p>

        {/* Philosophy statement */}
        <p className="opacity-0 animate-fade-up stagger-4 text-base lg:text-lg text-muted-foreground/80 max-w-xl mb-12 leading-relaxed">
          I believe in shipping fast, learning faster, and building systems that think alongside humans—not just for them.
        </p>

        {/* Quick info */}
        <div className="opacity-0 animate-fade-up stagger-5 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a 
            href="mailto:mrityunjay010105@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors link-underline"
          >
            <Mail className="w-4 h-4" />
            mrityunjay010105@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Hyderabad, India
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
