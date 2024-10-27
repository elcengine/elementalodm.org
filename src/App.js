import { useRef } from "react";

// * Components
import Home from "./components/Home";
import Literature from "./components/Literature";
import ResearchGap from "./components/ResearchGap";
import ResearchProblem from "./components/ResearchProblem";
import ResearchObjectives from "./components/ResearchObjectives";
import Methodology from "./components/Methodology";
import Technologies from "./components/Technologies";
import Milestones from "./components/Milestones";

// import Reviews from "./components/Reviews";
// import Properties from "./components/Properties";
// import MoreDetail from "./components/MoreDetail";
// import Featured from "./components/Featured";
// import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const domainRef = useRef(null);

  const allRefs = {
    homeRef,
    domainRef,
  };

  return (
    <div className="App">
      <Home homeRef={homeRef} allRefs={allRefs} />

      <Literature domainRef={domainRef} />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      
      <Milestones />

      {/* <Reviews />
      <Properties />
      <MoreDetail />
      <Featured />
      <Footer /> */}
    </div>
  );
}

export default App;
