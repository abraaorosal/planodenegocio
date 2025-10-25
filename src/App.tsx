import { HeaderNav } from "./components/HeaderNav";
import { Hero } from "./components/Hero";
import { ContextSection } from "./components/ContextSection";
import { TracksSection } from "./components/TracksSection";
import { OperationSection } from "./components/OperationSection";
import { FinanceSection } from "./components/FinanceSection";
import { ImpactSection } from "./components/ImpactSection";
import { InvestorSection } from "./components/InvestorSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary-900 text-white">
      <HeaderNav />
      <main className="relative">
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <ContextSection />
          <TracksSection />
          <OperationSection />
          <FinanceSection />
          <ImpactSection />
          <InvestorSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
