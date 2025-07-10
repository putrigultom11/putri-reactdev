
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Mobile Apps Developer Intern",
      company: "Rakamin Academy",
      location: "Remote",
      duration: "Feb 2025 - Mar 2024",
      type: "Internship",
      description: "Built an Android news app using Kotlin with infinite scroll and REST API integration, in a fast-paced virtual team setting.",
      achievements: [
        "Developed a responsive Android news app using Kotlin, integrating RESTful APIs with Retrofit",
        "Implemented infinite scrolling and clean architecture to enhance performance and maintainability",
        "Collaborated within an Agile team using GitLab for version control and CI workflows",
        "Ensured device compatibility through systematic testing across various Android environments"
      ],
      technologies: ["Kotlin", "Retrofit", "REST API", "GitLab"],
      website: "https://www.rakamin.com/"
    },
    {
      title: "Software Engineer Intern",
      company: "PT Umalo Sedia Tekno",
      location: "Depok, West Java",
      duration: "Aug 2024 - Jan 2025",
      type: "Internship",
      description: "Developed web-based solutions including e-commerce and company profile sites using Laravel and modern web technologies.",
      achievements: [
        "Built full-featured e-commerce site with product listing, cart, checkout, and admin dashboard",
        "Developed 4 responsive company profile websites for diverse client sectors",
        "Implemented user authentication and content management features",
        "Conducted both manual and automated testing using Robot Framework and Selenium"
      ],
      technologies: ["Laravel", "Blade", "HTML", "CSS", "JavaScript", "MySQL", "Cypress", "Selenium", "Robot Framework"],
      website: "https://umalo.id/"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Freelance":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Education":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Part-time":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="experience" className="py-20 bg-card/30 scroll-mt-28 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My experience delivering real projects in mobile and web development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full transform md:-translate-x-1/2 z-10 shadow-lg" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="glass-card border-0 hover:bg-primary/5 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-medium text-accent">{experience.company}</span>
                            {experience.website && (
                              <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getTypeColor(experience.type)}`}>
                          {experience.type}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <CardDescription className="mt-3 leading-relaxed">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-accent mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
