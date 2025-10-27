'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContatoSection() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.mensagem) {
      setStatus({ type: 'error', message: 'Por favor, preencha todos os campos.' });
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setForm({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Ocorreu um erro ao enviar. Tente novamente.' });
    }
  };

  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#111] text-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-6">Entre em Contato</h2>
      <p className="text-light/80 max-w-2xl mb-10 text-lg leading-relaxed">
        Tem um projeto em mente, quer conversar ou colaborar comigo?  
        Preencha o formulário abaixo e retornarei o mais breve possível.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-dark border border-primary/40 rounded-xl p-8 shadow-lg w-full max-w-lg flex flex-col gap-5"
      >
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          className="bg-transparent border border-light/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-primary outline-none transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          className="bg-transparent border border-light/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-primary outline-none transition"
        />
        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem..."
          rows={5}  
          value={form.mensagem}
          onChange={handleChange}
          className="bg-transparent border border-light/20 rounded-lg px-4 py-3 text-light placeholder-light/40 focus:border-primary outline-none transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-orange-500 transition"
        >
          <FaPaperPlane /> Enviar Mensagem
        </button>

        {status.type && (
          <p
            className={`mt-3 text-sm ${
              status.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
