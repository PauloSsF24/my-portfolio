export default function SobreSection() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-[#0a0a0a]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10 relative">
        Sobre mim
        <span className="block w-16 h-1 bg-primary mx-auto mt-3 rounded-full"></span>
      </h2>


      <p className="max-w-3xl text-light/80 text-lg md:text-xl leading-relaxed tracking-wide mb-12">
        Sou{" "}
        <span className="text-primary font-semibold">Paulo Sérgio</span>, um{" "}
        <span className="text-primary font-semibold">desenvolvedor Full Stack</span>{" "}
        apaixonado por tecnologia e pelo impacto que ela pode causar na vida das pessoas.
        Desde que comecei a estudar programação, encontrei na área de desenvolvimento
        uma forma de transformar ideias em soluções reais — combinando criatividade, lógica
        e um desejo constante de aprender.
        <br />
        <br />
        Atualmente, estou me aprofundando em{" "}
        <span className="text-primary font-medium">
          Next.js, React e Node.js
        </span>
        , com foco em construir aplicações modernas, performáticas e com boas práticas de
        código. Gosto de unir o design e a funcionalidade para criar experiências digitais
        completas, desde o front-end até o back-end.
        <br />
        <br />
        Estou em busca de desafios que me permitam evoluir como profissional, colaborar
        com pessoas incríveis e contribuir com projetos que façam diferença. Acredito que
        cada linha de código é uma oportunidade de aprendizado e crescimento — e estou
        apenas no começo dessa jornada.
      </p>

      <div className="mt-4 max-w-3xl bg-[#141414] border border-primary/30 rounded-2xl p-8 shadow-[0_0_30px_-5px_rgba(255,115,0,0.2)] hover:shadow-[0_0_40px_-5px_rgba(255,115,0,0.35)] transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Meus principais interesses
        </h3>
        <ul className="text-light/80 text-left list-disc list-inside space-y-3 text-base md:text-lg">
          <li>Desenvolvimento Full-Stack com Next.js, Node.js, React e Python</li>
          <li>Automação de tarefas e integrações com APIs</li>
          <li>Design de interfaces (UI/UX)</li>
        </ul>
      </div>
    </section>
  );
}
