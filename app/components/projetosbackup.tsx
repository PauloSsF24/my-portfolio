const projetos = [
  {
    nome: "FourFoots",
    descricao:
      "Landing Page responsiva de um petshop ficticio utilizando Next.js e Tailwindcss",
    link: "https://github.com/PauloSsF24/fourfoots-landingpage.git",
  },
];

export default function Projetos() {
  return (
    <section className="min-h-screen px-6 py-20 text-center bg-[#111]">
      <h2 className="text-4xl font-bold text-primary mb-10">Meus Projetos</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projetos.map((p) => (
          <div
            key={p.nome}
            className="bg-dark border border-primary/40 rounded-xl p-6 text-left hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">{p.nome}</h3>
            <p className="text-light/80 mb-4">{p.descricao}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
