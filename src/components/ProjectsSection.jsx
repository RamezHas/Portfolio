import { ArrowRight, Github } from "lucide-react"
import { getImagePath } from "@/lib/imagePath"
import { BorderBeam } from "../components/border-beam.tsx"

const projects = [
  {
    id: 1,
    title: "FormaIA - AI Educational Platform",
    description:
      "Intelligent platform that automatically generates structured educational content (courses, quizzes, presentations) using advanced NLP models. Built during Zaddem Consulting internship.",
    image: getImagePath("projects/project1.png"),
    tags: ["Python", "Streamlit", "FastAPI", "NLP"],
    githubUrl: "https://github.com/RamezHas/FormaIA",
  },
  {
    id: 2,
    title: "Local AI Chatbot",
    description:
      "Interactive conversational AI with local LLM deployment. Features real-time streaming responses and customizable AI parameters.",
    image: getImagePath("projects/project2.png"),
    tags: ["Python", "Streamlit", "LLM"],
    githubUrl: "https://github.com/RamezHas/chatbot",
  },
  {
    id: 3,
    title: "Hand Tracking Project",
    description:
      "Collection of computer vision applications using hand tracking for touchless interaction including gesture-based drawing and system volume control.",
    image: getImagePath("projects/project3.png"),
    tags: ["Python", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/RamezHas/Hand-Tracking-Project",
  },
  {
    id: 4,
    title: "AI Study Assistant",
    description:
      "An AI-powered study planner that helps students organize their schedules, manage tasks, and stay focused. Currently in development, the app uses smart recommendations to create personalized study plans, send adaptive reminders, and analyze productivity over time.",
    image: getImagePath("projects/project4.png"),
    tags: [],
    githubUrl: "https://github.com/RamezHas/ai-study-assistant",
    status: "In Progress",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance,
          and user experience.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40 justify-items-center">
          {projects.map((project, key) => (
            <div key={key} className="relative rounded-lg overflow-hidden border border-transparent w-70 h-full">
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

              {/* Image + Status Badge */}
              <div className="relative h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full pl-2 pt-2 pr-2"
                />
                {project.status && (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 ">
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="mt-auto flex justify-center pb-4">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-transform transform hover:scale-110 duration-300"
                        rel="noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
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
