import {
  CustomerReview,
  PopularProduct,
  Footer,
  Service,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index";
const App = () => (
  <main>
    <section className="px-8 sm:px-16 pb-12 sm:pb-24 text-2xl">Nav</section>
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

    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
