import { Briefcase, TrendingUp, Users, Bot } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 lg:px-0 bg-secondary/20">
      <div className="container max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Experience
          </span>
          <div className="flex-1 section-divider" />
        </div>

        {/* Experience card */}
        <div className="card-elevated p-8 lg:p-10 glow-subtle">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 animate-glow-pulse">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  AI Chatbot Developer
                </h3>
                <p className="text-muted-foreground">
                  BioEcoSat Digital — Internship
                </p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground font-mono">
              Jun – Aug 2024
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Built an AI assistant for farmers that answers crop, weather, and soil-related 
            queries using natural language understanding. Deployed to WhatsApp and web platforms, 
            serving agricultural communities.
          </p>

          {/* Key metrics */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Pilot users reached</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">30%</p>
                <p className="text-sm text-muted-foreground">Query accuracy improvement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-2xl font-display font-semibold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Team collaboration</p>
              </div>
            </div>
          </div>

          {/* Tech tags */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "OpenAI", "Dialogflow", "WhatsApp API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
