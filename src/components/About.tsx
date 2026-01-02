import { GraduationCap, Calendar, Sparkles } from "lucide-react";

const About = () => {
  const exploring = [
    "Agentic AI architectures",
    "Multi-tool LLM systems",
    "Autonomous task workflows",
    "Blockchain & Web3 integration",
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-0">
      <div className="container max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Background
          </span>
          <div className="flex-1 section-divider" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
              I'm a final-year B.Tech student at VIT Vellore, focused on building 
              production-ready systems that bridge AI capabilities with real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans deploying AI chatbots that serve 100+ users, architecting 
              cloud-native video generation pipelines on AWS, and experimenting with 
              smart contracts on Ethereum. I'm drawn to problems that require systems 
              thinking—where understanding the full stack matters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently exploring how autonomous AI agents can orchestrate complex 
              workflows, particularly in the intersection of LLMs and blockchain infrastructure.
            </p>
          </div>

          {/* Education card */}
          <div className="card-elevated p-6 h-fit">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-medium text-foreground">
                  B.Tech Information Technology
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vellore Institute of Technology
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              2022 – 2026
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Relevant Coursework</p>
              <p className="text-sm text-foreground/80">
                Distributed Systems, Blockchain Architecture, Cloud Computing
              </p>
            </div>
          </div>
        </div>

        {/* Currently exploring */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Currently Exploring</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {exploring.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm bg-secondary/50 border border-border/50 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
