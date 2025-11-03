import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { getImagePath } from "@/lib/imagePath"
import { BorderBeam } from "../components/border-beam.tsx"

const projects = [
  {
    id: 1,
    title: "FormaIA - AI Educational Platform",
    description:
      "Intelligent platform that automatically generates structured educational content (courses, quizzes, presentations) using advanced NLP models. Built during Zaddem Consulting internship. ",
    image: getImagePath("public/projects/project1.png"),
    tags: ["Python", "Streamlit", "FastAPI", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/RamezHas/FormaIA",
  },
  {
    id: 2,
    title: "Local AI Chatbot",
    description:
      "Interactive conversational AI with local LLM deployment. Features real-time streaming responses and customizable AI parameters.",
    image: getImagePath("projects/project2.png"),
    tags: ["Python", "Streamlit", "LLM"],
    demoUrl: "#",
    githubUrl: "https://github.com/RamezHas/chatbot",
  },
  {
    id: 3,
    title: "Hand Tracking Project ",
    description:
      "Collection of computer vision applications using hand tracking for touchless interaction including gesture-based drawing and system volume control.",
    image: getImagePath("projects/project3.png"),
    tags: ["Python", "OpenCV", "MediaPipe"],
    demoUrl: "#",
    githubUrl: "https://github.com/RamezHas/Hand-Tracking-Project",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance,
          and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="relative rounded-lg overflow-hidden border border-transparent">
              <BorderBeam
        size={300}
        borderWidth={3}
        initialOffset={30}
        className="from-transparent via-cyan-500 to-transparent"
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 50,
        }}
      />
              <div className="h-48  ">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full pl-2 pt-2 pr-2"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RamezHas"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
