import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-0">
      <div className="container max-w-4xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Contact
          </span>
          <div className="flex-1 section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* CTA */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Let's build something{" "}
              <span className="gradient-text">intelligent</span> together.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm actively looking for opportunities in agentic AI, applied ML, and 
              backend systems. If you're building something ambitious, I'd love to hear about it.
            </p>
          </div>

          {/* Contact links */}
          <div className="space-y-4">
            <a
              href="mailto:mrityunjay010105@gmail.com"
              className="group flex items-center justify-between p-4 card-elevated hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">mrityunjay010105@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+918499927083"
              className="group flex items-center justify-between p-4 card-elevated hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+91 8499927083</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
