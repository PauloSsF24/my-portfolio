'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiGithub
} from 'react-icons/si';

export default function LinguagensSection() {
  const linguagens = [
    { nome: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { nome: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
    { nome: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { nome: 'React.js', icon: <SiReact className="text-cyan-400" /> },
    { nome: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { nome: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { nome: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { nome: 'Python', icon: <SiPython className="text-blue-400" /> },
    { nome: 'Git', icon: <SiGit className="text-red-500" /> },
    { nome: 'GitHub', icon: <SiGithub className="text-gray-300" /> },
  ];

  return (
    <section
      id="linguagens"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#111] text-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-4">
        Linguagens & Tecnologias
      </h2>

      <p className="text-light/80 max-w-2xl mb-10 text-lg leading-relaxed">
        Essas são as principais tecnologias que utilizo no meu dia a dia como
        desenvolvedor Full Stack. Gosto de explorar ferramentas modernas e
        eficientes, unindo design, performance e boas práticas para entregar
        aplicações de qualidade.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="w-full max-w-6xl"
      >
        {linguagens.map((lang, index) => (
          <SwiperSlide key={index}>
            <div className="bg-dark border border-primary/30 rounded-xl p-6 shadow-lg hover:shadow-[0_0_25px_#FC4100aa] transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <div className="text-5xl">{lang.icon}</div>
              <p className="text-light font-medium">{lang.nome}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
