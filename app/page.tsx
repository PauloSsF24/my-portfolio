import HomeSection from "./components/HomeSection";
import SobreSection from "./components/SobreSection";
import ProjetosSection from "./components/ProjetosSection";
import LinguagensSection from "./components/LinguagensSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="pt-20">
      <section id="home">
        <HomeSection />
      </section>
      <section id="sobre">
        <SobreSection />
      </section>
      <section id="projetos">
        <ProjetosSection />
      </section>
      <section id="linguagens">
        <LinguagensSection />
      </section>
      <section id="contato">
        <ContatoSection />
      </section>
      <Footer />
    </main>
  );
}
