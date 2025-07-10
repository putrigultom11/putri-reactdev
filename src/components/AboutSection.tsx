
import { Code, Lightbulb, Users, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative thinking to tackle complex challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to software development"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results and meeting objectives"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a recent Software Engineering graduate with strong hands-on experience in both frontend and backend development. My passion lies in building user-centric, responsive, and scalable web applications—combining clean design with efficient logic.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With hands-on experience in full-stack development, I've worked with modern technologies
              to build responsive web applications and robust backend systems. I thrive in collaborative
              environments and am always eager to learn new technologies and methodologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm actively seeking opportunities to contribute to innovative projects and grow within
              a dynamic tech team. My goal is to leverage my technical skills and fresh perspective
              to help organizations achieve their technological objectives.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🎓 Information Technology Graduate</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">📍 Based in Indonesia — Open to Remote or Hybrid Roles</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🚀 Passionate about building user-focused web solutions and learning fast</span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <item.icon
                    size={32}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
