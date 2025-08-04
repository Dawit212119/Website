import Nav from "./components/Nav";
import {
  CustomerReview,
  PopularProduct,
  Footer,
  Service,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Hero,
} from "./sections/index";
const App = () => (
  <main className="relative max-w-full">
    <Nav />
    <section className="px-8 max-w-full sm:px-16 pb-12 sm:pb-24">
      <Hero />
    </section>
    <section className="padding">
      {" "}
      <PopularProduct />{" "}
    </section>
    <section className="padding">
      {/* <SuperQuality /> */}
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 py-10">
      <Service />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="padding">
      <CustomerReview />
    </section>

    <section className="padding">
      {" "}
      <Subscribe />
    </section>

    <section className="padding bg-black mt-12">
      <Footer />
    </section>
  </main>
);

export default App;
