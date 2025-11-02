import { Briefcase, Code, User } from "lucide-react";
import {FaRobot,FaCode,FaEye} from "react-icons/fa"
import { scrollToSection } from "@/lib/scrollToSection";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI/ML Developer & Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a final-year student studying software engineering at iTeam University.

(Tunisia), specialized in Artificial Intelligence and Full-stack

development. I build intelligent applications by solving real-world

problems in Python, machine learning, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button" onClick={(e) => scrollToSection(e, '#contact')}>
                {" "}
                Get In Touch
              </a>

              <a
                href="/Portfolio/projects/cv26.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download="Ramez_Hasnaoui_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaRobot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI/ML Development </h4>
                  <p className="text-muted-foreground">
                    Using NLP, machine learning, and modern AI frameworks like OpenAI, Hugging Face, and Ollama to make smart systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaCode className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web applications using FastAPI, React.js, 
Flask, and modern frameworks. Focus on clean architecture and 
scalable solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaEye className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Vision</h4>
                  <p className="text-muted-foreground">
                    Building systems that can recognize gestures and track hands with OpenCV and MediaPipe. Processing in real time and interactive apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
