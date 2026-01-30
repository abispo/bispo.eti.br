export default function Head() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alessandro Bispo",
    url: "https://bispo.eti.br",
    jobTitle: "Gestor de Automação",
    description:
      "Especialista em automação de processos, integração de sistemas, desenvolvimento de APIs e N8N. Transforme seu negócio com soluções inteligentes.",
    image: "https://bispo.eti.br/portfolio-image.svg",
  } as const;

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://bispo.eti.br/" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
