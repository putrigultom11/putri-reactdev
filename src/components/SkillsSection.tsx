
import {
  Code,
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Palette,
  Settings
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
                { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
        { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
        // { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "Tailwind CSS", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Laravel (PHP)", level: 95, color: "from-blue-500 to-yellow-500" },
        { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
        // { name: "Express.js", level: 78, color: "from-gray-600 to-gray-400" },
        { name: "RESTful APIs", level: 82, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 95, color: "from-blue-600 to-blue-800" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-800" },
        // { name: "Docker", level: 72, color: "from-blue-500 to-cyan-600" },
        { name: "Git/GitHub", level: 90, color: "from-yellow-500 to-orange-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: Settings,
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Postman", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Selenium", level: 70, color: "from-green-600 to-green-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical toolbox covering frontend, backend, databases, and testing tools, built through hands-on experience in real projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 rounded-xl hover:bg-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group animate-slide-in-left"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Overview */}
        {/* <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Git", "Python", "MongoDB", "Tailwind", "Express"].map((tech, index) => (
              <div
                key={index}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
