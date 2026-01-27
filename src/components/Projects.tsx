interface Project {
  title: string;
  desc: string;
}

const PROJECTS: Project[] = [
  {
    title: "E-commerce API",
    desc: "RESTful API for multi-vendor marketplace with payment integration and real-time inventory management",
  },
  {
    title: "N8N Automation Suite",
    desc: "Complex workflow automation connecting CRM, email, and data warehouse systems",
  },
  {
    title: "Microservices Architecture",
    desc: "Scalable backend system with service-to-service communication and message queuing",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="space-y-6">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-zinc-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
