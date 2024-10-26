// * Components
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Properties from "./components/Properties";
import MoreDetail from "./components/MoreDetail";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Domain from "./components/Domain";
import ResearchGap from "./components/ResearchGap";

function App() {
  return (
    <div className="App">
      <Hero />
      <Domain />
      <ResearchGap />
      <Reviews />
      <Properties />
      <MoreDetail />
      <Featured />
      <Footer />
    </div>
  );
}

// Git debug comment

export default App;
