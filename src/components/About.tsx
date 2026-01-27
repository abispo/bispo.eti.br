import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Sobre mim</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image - Shows first on mobile, second on desktop */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <Image
            src="/portfolio-image.svg"
            alt="Portfolio"
            width={400}
            height={500}
            className="rounded-lg border border-zinc-700 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-zinc-300 space-y-4">
          <p>
            Olá, sou o Alessandro, gestor de automação e desenvolvedor com mais
            de 12 anos de experiência em otimização de processos, integração de
            sistemas e desenvolvimento de APIs. Especializado em ferramentas
            como Python, ManyChat e outras soluções inovadoras, meu objetivo é
            ajudar empresas a aumentar sua eficiência operacional e reduzir
            custos por meio de automações inteligentes e personalizadas.
          </p>
          <p>
            Com um olhar técnico e estratégico, atuo desde a análise de
            processos até a implementação de soluções completas, garantindo que
            cada automação seja adaptada às necessidades específicas do negócio.
            Minha experiência como desenvolvedor me permite criar integrações
            robustas entre sistemas, além de desenvolver APIs que facilitam a
            comunicação e a automação de tarefas complexas.
          </p>
          <p>
            Seja para simplificar operações repetitivas, integrar plataformas ou
            criar fluxos de trabalho automatizados, estou aqui para transformar
            desafios em resultados. Vamos trabalhar juntos para levar seu
            negócio ao próximo nível?
          </p>
        </div>
      </div>
    </section>
  );
}
