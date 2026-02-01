export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Transforme seu Negócio com{" "}
          <span className="text-blue-400">Automações Inteligentes</span> e
          Alcance <span className="text-blue-400">Resultados Rápidos</span>.
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl">
          Soluções personalizadas para aumentar a eficiência, reduzir custos e
          impulsionar o crescimento do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-400"
          >
            Serviços
          </a>
          <a
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-emerald-400"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
