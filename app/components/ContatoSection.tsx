export default function ContatoSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Entre em contato</h2>
      <p className="text-light/80 mb-10 max-w-2xl">
        Quer conversar sobre um projeto, colaboração ou oportunidade?  
        Envie uma mensagem — terei prazer em responder!
      </p>

      <form className="w-full max-w-md bg-dark border border-primary/40 rounded-xl p-8 shadow-lg">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-dark border border-light/20 text-light focus:border-primary outline-none"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-dark border border-light/20 text-light focus:border-primary outline-none"
        />
        <textarea
          placeholder="Sua mensagem..."
          rows={5}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-dark border border-light/20 text-light focus:border-primary outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-orange-500 transition"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
