export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Backend Technologies
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li>• Node.js / Express</li>
            <li>• Python / FastAPI</li>
            <li>• RESTful APIs & GraphQL</li>
            <li>• Database Design (SQL/NoSQL)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Automation & Integration
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li>• N8N Workflow Automation</li>
            <li>• System Integration</li>
            <li>• Webhook Management</li>
            <li>• Custom Workflow Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
