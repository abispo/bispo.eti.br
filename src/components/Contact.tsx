export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Vamos Trabalhar Juntos
      </h2>
      <p className="text-zinc-300 mb-12 max-w-2xl mx-auto text-center">
        Interessado em discutir automação, integração de sistemas ou
        oportunidades de colaboração? Entre em contato comigo. Estou pronto para
        transformar seus desafios em resultados.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:alessandro@bispo.eti.br"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
        >
          📧 Email
        </a>
        <a
          href="https://br.linkedin.com/in/alessandrobispo"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/abispo"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition"
        >
          🐙 GitHub
        </a>
        <a
          href="https://wa.me/+5511946099765?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20automação."
          target="_blank"
          rel="noopener noreferrer"
          className="border border-zinc-600 hover:border-green-400 px-6 py-3 rounded-lg font-medium transition"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}
