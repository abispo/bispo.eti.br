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
          className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-sky-400"
        >
          📧 Email
        </a>
        <a
          href="https://br.linkedin.com/in/alessandrobispo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-400"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://wa.me/+5511946099765?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20automação."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-400"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}
