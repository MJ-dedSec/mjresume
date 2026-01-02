import { Cloud, Cpu, Database, Coins, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Based Reel Generator",
    description:
      "Serverless video generation pipeline that accepts text prompts and produces short visual content. Built for scale with event-driven architecture.",
    tech: ["AWS Lambda", "S3", "API Gateway", "Python"],
    icon: Cloud,
    highlight: true,
  },
  {
    title: "Obstacle Avoidance Rover",
    description:
      "Autonomous navigation system using ultrasonic sensors for real-time obstacle detection. Simulated real-world navigation scenarios on test terrain.",
    tech: ["Arduino", "IoT", "C++", "Motor Control"],
    icon: Cpu,
  },
  {
    title: "Subscriber Management API",
    description:
      "RESTful API for managing subscriber databases with secure CRUD operations, input validation, and proper error handling.",
    tech: ["Node.js", "Express", "MongoDB", "REST"],
    icon: Database,
  },
  {
    title: "ERC-20 Token & Smart Wallet",
    description:
      "Deployed token contract on Ethereum testnet with MetaMask integration. React frontend for balance visualization and transactions.",
    tech: ["Solidity", "Web3.js", "React", "MetaMask"],
    icon: Coins,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 lg:px-0">
      <div className="container max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Projects
          </span>
          <div className="flex-1 section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group card-elevated p-6 hover:border-primary/30 transition-all duration-300 ${
                  project.highlight ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-secondary">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs bg-secondary/70 text-muted-foreground rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
