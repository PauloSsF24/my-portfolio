import { SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs } from "react-icons/si";

const linguagens = [
  { nome: "JavaScript", nivel: "Avançado", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { nome: "TypeScript", nivel: "Intermediário", icon: <SiTypescript size={40} className="text-blue-500" /> },
  { nome: "Python", nivel: "Avançado", icon: <SiPython size={40} className="text-blue-400" /> },
  { nome: "HTML & CSS", nivel: "Avançado", icon: <SiHtml5 size={40} className="text-orange-500 mr-2" /> },
  { nome: "React / Next.js", nivel: "Avançado", icon: <SiReact size={40} className="text-cyan-400" /> },
  { nome: "Node.js", nivel: "Intermediário", icon: <SiNodedotjs size={40} className="text-green-500" /> },
];

export default function LinguagensSection() {
  return (
    <section className="min-h-screen px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-primary mb-10">
        Linguagens e Tecnologias
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {linguagens.map((l) => (
          <div
            key={l.nome}
            className="bg-dark border border-primary/40 rounded-xl p-6 flex items-center gap-4 hover:bg-primary/10 transition"
          >
            {l.icon}
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-primary">{l.nome}</h3>
              <p className="text-light/70">{l.nivel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
