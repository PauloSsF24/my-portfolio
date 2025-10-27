'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProjetosSection() {
  const projetos = [
    {
      titulo: 'FourFoots',
      descricao:
        'Landing Page responsiva de um petshop ficticio utilizando Next.js e Tailwindcss',
      imagem: '/projetos/fourFoots.png',
      linkSite: 'https://fourfoots-landingpage.vercel.app/',
      linkCodigo: 'https://github.com/PauloSsF24/fourfoots-landingpage',
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0a0a0a]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10 relative">
        Meus Projetos
        <span className="block w-16 h-1 bg-primary mx-auto mt-3 rounded-full"></span>
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full max-w-5xl"
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#141414] border border-primary/30 rounded-2xl overflow-hidden shadow-[0_0_30px_-5px_rgba(255,115,0,0.2)] hover:shadow-[0_0_40px_-5px_rgba(255,115,0,0.35)] transition-shadow duration-300">
              <div className="relative w-full h-[250px] md:h-[350px]">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition"
                />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {projeto.titulo}
                </h3>
                <p className="text-light/80 mb-6 text-base md:text-lg">
                  {projeto.descricao}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={projeto.linkSite}
                    target="_blank"
                    className="px-5 py-2 bg-primary text-dark font-semibold rounded-md hover:bg-orange-500 transition"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={projeto.linkCodigo}
                    target="_blank"
                    className="px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-dark transition"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
