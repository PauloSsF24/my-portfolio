import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/40 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-light/70 text-center md:text-left">
          © {new Date().getFullYear()} Paulo Sérgio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
