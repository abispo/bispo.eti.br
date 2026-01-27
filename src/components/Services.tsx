interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServiceCategory {
  title: string;
  icon: string;
  items: ServiceItem[];
}

const SERVICES: ServiceCategory[] = [
  {
    title: "Automação de Processos",
    icon: "🤖",
    items: [
      {
        title: "Automação de Relatórios",
        description:
          "Criação de fluxos automatizados para geração e envio de relatórios financeiros e operacionais.",
        icon: "📸",
      },
      {
        title: "Automações em Redes Sociais",
        description:
          "Configuração de automações para interações, coleta de leads e envio automático de mensagens.",
        icon: "📱",
      },
      {
        title: "Automação de Atendimento",
        description:
          "Desenvolvimento de chatbots e agentes de inteligência artificial para atendimento ao cliente 24/7.",
        icon: "💬",
      },
    ],
  },
  {
    title: "Integração de Sistemas",
    icon: "🔗",
    items: [
      {
        title: "Integração CRM e ERP",
        description:
          "Conexão entre sistemas de gestão de relacionamento com o cliente (CRM) e planejamento de recursos empresariais (ERP).",
        icon: "📊",
      },
      {
        title: "Integração com APIs",
        description:
          "Desenvolvimento de APIs para conectar sistemas e permitir a troca de dados em tempo real.",
        icon: "🔌",
      },
      {
        title: "Integração de Ferramentas",
        description:
          "Conexão de ferramentas como Google Sheets, Trello, Slack e outras para otimizar fluxos de trabalho.",
        icon: "🔧",
      },
    ],
  },
  {
    title: "Consultoria em Automação",
    icon: "📈",
    items: [
      {
        title: "Análise de Processos",
        description:
          "Identificação de oportunidades de automação e melhoria de processos empresariais.",
        icon: "🛠️",
      },
      {
        title: "Planejamento de Automação",
        description:
          "Desenvolvimento de estratégias e planos para implementação de automações.",
        icon: "📋",
      },
      {
        title: "Otimização de Fluxos",
        description:
          "Revisão e melhoria de fluxos de trabalho existentes para aumentar a eficiência.",
        icon: "⚡",
      },
    ],
  },
  {
    title: "Desenvolvimento de RPAs",
    icon: "🤖",
    items: [
      {
        title: "Automação de Tarefas",
        description:
          "Criação de robôs para automação de tarefas repetitivas e manuais.",
        icon: "📂",
      },
      {
        title: "Automação de Dados",
        description:
          "Desenvolvimento de RPAs para coleta, processamento e organização de dados. Web Scraping.",
        icon: "🔄",
      },
      {
        title: "Integração de RPAs",
        description:
          "Implementação de robôs para integração entre sistemas e plataformas.",
        icon: "🚀",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
        Serviços
      </h2>

      <div className="space-y-16">
        {SERVICES.map((category) => (
          <div key={category.title}>
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                {category.title}
              </h3>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
