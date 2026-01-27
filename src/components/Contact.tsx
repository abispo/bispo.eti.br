export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">
        Let's Work Together
      </h2>
      <p className="text-zinc-300 mb-8 max-w-xl">
        Interested in discussing API design, automation challenges, or
        collaboration opportunities? Reach out anytime.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:hello@example.com"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
        >
          Email
        </a>
        <a
          href="#"
          className="border border-zinc-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="border border-zinc-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
