import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

function Home() {
  return (
    <main className="h-screen container mx-auto flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

export default Home;
