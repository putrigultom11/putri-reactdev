import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FerryPass – Ferry Booking Ticket System",
      description: "A cross-platform ferry ticketing system using RESTful APIs, with UAT & SUS evaluations and a chatbot powered by NLP and machine learning.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["REST API", "Flutter", "Tailwind CSS", "MySQL", "React", "Laravel", "NLP", "Selenium", "Midtrans"],
      liveDemo: "",
      sourceCode: "https://github.com/ImmanuelPartogi/TA-Kel-13",
      featured: false
    },
    {
      title: "Newsly – Android News Reader Application",
      description: "A real-time news reader app built with Kotlin, featuring infinite scrolling, live data from NewsAPI.org, and optimized UI with clean architecture.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Kotlin", "REST API", "Retrofit", "Android"],
      liveDemo: "",
      sourceCode: "https://github.com/putriitr/NewsApp",
      featured: false
    },
    {
      title: "Company Profile Website Suite",
      description: "Developed  custom company profile websites with user authentication, CMS features, CRUD functionality, and intuitive UI/UX design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "HTML/CSS", "Tailwind CSS", "Cypress", "JavaScript", "MySQL", "Selenium"],
      liveDemo: "",
      sourceCode: "https://github.com/putrigultom11/GSA-Compro",
      featured: false
    },
    {
      title: "Labtek & Labverse – ECommerce Website",
      description: "Built two tailored e-commerce platforms with product catalog, shopping cart, checkout flow, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "Tailwind CSS", "HTML", "PHP", "MySQL", "Midtrans", "Cypress"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    },
    {
      title: "Electronics Learning Platform",
      description: "An e-learning platform using C# and .NET with a distributed database system, data analysis, and functional frontend interface.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      technologies: ["C#", ".NET"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    },
    {
      title: "NextGen – Electronics Online Store",
      description: "Developed an electronics e-commerce site with PHP, ReactJS, and MySQL, emphasizing clean UI and efficient data operations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "React", "MySQL"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    },
    {
      title: "Purnama Balige Hotel Reservation System",
      description: "Hotel booking system using PHP and MySQL with Midtrans integration, featuring microservices and full frontend implementation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Laravel", "Tailwind CSS", "HTML", "PHP", "MySQL", "REST API", "Selenium"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    },
    {
      title: "StayNight – Android Hotel Booking App",
      description: "A native Android hotel reservation app built with Kotlin and Java, featuring modular OOP design and multi-device compatibility.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      technologies: ["Kotlin", "Java", "Android", "OOP"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    },
    {
      title: "IT DEL BAAK Administration Application",
      description: "Application for managing academic administration using PHP, ReactJS, and standard frontend technologies for dynamic UI rendering.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "React", "HTML", "CSS", "JavaScript"],
      liveDemo: "",
      sourceCode: "",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          {/* <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group glass-card border-0 overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 text-muted-foreground">
                        {/* +{project.technologies.length - 3} */}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {/* <Button
                      size="sm"
                      className="flex-1 text-xs bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </Button> */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300"
                      asChild
                    >
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
