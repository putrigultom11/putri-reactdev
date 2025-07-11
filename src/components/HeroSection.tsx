import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Background Animasi */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">

          {/* Foto */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent p-1 bg-gradient-to-r from-primary to-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                  <img
                    src="/putri.jpg"
                    alt="Putri Gultom"
                    className="w-60 h-60 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Nama & Title */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Putri Tamara Gultom
          </h1>
          <p className="text-xl sm:text-3xl text-muted-foreground mb-6">
            <Typewriter
              words={['Software Engineer', 'Frontend Developer', 'Quality Assurance', 'Data Analyst', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Passionate about creating innovative solutions and building scalable applications.
            Ready to contribute to cutting-edge technology teams.
          </p>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/CV_Putri Tamara Gultom.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="animated-gradient text-white font-semibold py-3 px-8 hover:scale-105 transition-transform duration-300">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </a>
            <a href="mailto:putriigultom11@gmail.com">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 hover:scale-105 transition-all duration-300">
                <Mail className="mr-2" size={20} />
                Hire Me
              </Button>
            </a>
          </div>

          {/* Sosial Media */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/putriitr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://github.com/putrigultom11" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/putrigultom07/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
