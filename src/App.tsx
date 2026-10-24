import Header from "./components/Header";
import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import ServicesBento from "./components/ServicesBento";
import Method from "./components/Method";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      {/* Fixed architectural grid layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid" aria-hidden />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <BeforeAfter />
          <ServicesBento />
          <Method />
          <Coverage />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}
