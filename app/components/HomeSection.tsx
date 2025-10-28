import Image from 'next/image'
import profile from '../../public/profile-ps.png'
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 relative">
      <div className='absolute top-0 left-0 w-[400px] h-[400px] rounded-full
      bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[80px] -z-10'></div>
      <div className='absolute top-0 right-0 w-[700px] h-[700px] rounded-full
      bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[100px] -z-10'></div>
      <div className='absolute bottom-0 left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[100px] -z-10'></div>

      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

        {/* IMAGEM — vem primeiro no mobile */}
        <div className="order-1 lg:order-2 flex justify-center relative mt-8 lg:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_20px_2px_rgba(255,115,0,0.6)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.8)] transition-shadow duration-300">
            <Image
              src={profile}
              alt="Foto de perfil"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* TEXTO — vem depois no mobile */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Olá, eu sou <span className="text-primary">Paulo Sérgio</span>
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 lg:max-w-2xl text-light/80 mt-4 text-sm md:text-base lg:text-lg">
            Desenvolvedor FullStack com foco em soluções modernas e criativas, unindo design e performance para criar aplicações incríveis, funcionais que mudarão o dia-a-dia!
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#projetos"
              className="px-5 py-2 rounded-md flex items-center justify-center w-fit gap-2 bg-primary text-dark font-semibold hover:bg-orange-500 transition"
            >
              Ver meus projetos
            </a>

            <a
              href="/PauloSergioDEV.pdf"
              download
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark transition flex items-center justify-center gap-2"
            >
              <HiOutlineDownload size={20} />
              Currículo
            </a>

            <div className="flex gap-3 mt-4 md:mt-0">
              <a
                href="https://github.com/PauloSsF24"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/paulossf/"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/zero.umtech"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
