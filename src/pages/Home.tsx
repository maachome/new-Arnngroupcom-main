import { Header } from "../components/Header";
import { BusinessSection } from "../components/BusinessSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Centered Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Top Text Section - flex-1 pushes it to match bottom section */}
        <section className="flex-1 flex flex-col justify-end pb-12">
          <div className="mx-[5%] text-center">
            <p className="md:text-3xl lg:text-3xl text-gray-900 leading-relaxed uppercase text-[10px] font-bold tracking-wider">
              BUILDING LEGACIES EMPOWERING FUTURES
            </p>
          </div>
        </section>

        {/* Business Divisions Section - Fixed height defined in component */}
        <BusinessSection />

        {/* Bottom Quote Section - flex-1 pushes it to match top section */}
        <section className="flex-1 flex flex-col justify-center">
          <div className="max-w-[900px] mx-auto text-center px-[32px]">
            <p className="md:text-3xl text-gray-800 leading-relaxed text-[16px]">
              Pioneering sustainable growth and transformative solutions across global markets.
            </p>
          </div>
        </section>
      </div>

      {/* Footer - Always at bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}