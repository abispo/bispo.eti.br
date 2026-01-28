import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Sobre mim
      </h2>
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
            de 12 anos de experiência criando soluções para otimizar processos,
            integrar sistemas e automatizar operações do dia a dia. Trabalho
            principalmente com Python, N8N, ManyChat e outras ferramentas de
            automação, sempre com foco em eficiência, redução de custos e
            resultados práticos para o negócio.
          </p>
          <p>
            Atuo desde a análise dos processos até a implementação das
            automações, cuidando para que cada solução realmente faça sentido
            para a rotina da empresa. Minha experiência como desenvolvedor me
            permite criar integrações estáveis entre plataformas e desenvolver
            APIs que simplificam tarefas complexas e repetitivas.
          </p>
          <p>
            Se você precisa automatizar processos, integrar sistemas ou ganhar
            escala sem aumentar custos, posso te ajudar. Vamos conversar e ver
            como a automação pode trabalhar a favor do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
