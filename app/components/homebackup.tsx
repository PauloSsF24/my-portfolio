import Image from 'next/image'
import profile from '../../public/profile-ps.png'
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5">
      <div className='absolute top-0 left-0 w-[400px] h-[400px] rounded-full
      bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[80px] -z-10'></div>
      <div className='absolute top-0 right-0 w-[700px] h-[700px] rounded-full
      bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[100px] -z-10'></div>
      <div className='absolute bottom-0 left-[20%] w-[500px] h-[500px] rounded-full
      bg-gradient-to-r from-[#FC410010] to-[#FC410010] blur-[100px] -z-10'></div>
      <div>
        
        <Image
          src={profile}
          alt="Foto de perfil"
          height={800}
          priority
          className="object-cover opacity-60 lg:hidden rounded-full"
        />
        <div className="absolute inset-0 opacity-40 md:hidden"></div>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
            Olá, eu sou <span className="text-primary">Paulo Sérgio</span>
          </h1>
          <p className="max-w-2xl lg:text-lg text-light/80 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
            consequatur sunt enim vitae ipsum beatae iure molestiae expedita
            magnam odit modi accusantium fuga accusamus repellendus, ratione
            debitis aliquam esse!
          </p>
          <div className="justify-items-center mt-6">
            <a
              href="#projetos"
              className="px-5 py-2 rounded-md flex items-center justify-center w-fit gap-2 bg-primary text-dark font-semibold hover:bg-orange-500 transition"
            >
              Ver meus projetos
            </a>
          </div>
          <div className="justify-items-center mt-6">
            <a
              href="/PauloSergioDEV.pdf"
              download
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark transition flex items-center justify-center gap-2"
            >
              <HiOutlineDownload size={20} />
              Currículo
            </a>
            <div className="flex gap-3 ml-2">
              <a
                href="https://github.com/seuusuario"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/seulinkedin"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/seuinstagram"
                target="_blank"
                className="p-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-dark transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center relative -mt-28 lg:-mt-28">
          <div className="rounded-full overflow-hidden shadow-[0_0_20px_2px_rgba(255,115,0,0.6)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.8)] transition-shadow duration-300 relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] ">
            <Image
              src={profile}
              alt="Foto de perfil"
              fill
              className="rounded-full w-64 h-64 object-cover shadow-[0_0_25px_#ff6600]"
              priority
            />
          </div>
        </div>
      </article>
    </section>
  );
}
