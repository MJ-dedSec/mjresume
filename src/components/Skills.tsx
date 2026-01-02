const skillCategories = [
  {
    label: "Languages",
    skills: ["C++", "JavaScript", "Python", "TypeScript", "Solidity"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["React", "Node.js", "Express", "MongoDB", "Web3.js"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS Lambda", "S3", "EC2", "Docker", "REST APIs"],
  },
  {
    label: "Emerging",
    skills: ["Agentic AI", "LLM Systems", "Smart Contracts", "Blockchain"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 lg:px-0 bg-secondary/20">
      <div className="container max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Skills
          </span>
          <div className="flex-1 section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-card border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
