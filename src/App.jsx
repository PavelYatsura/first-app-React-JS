import "./App.css";
import Header from "./components/Header";

import TeachinhSection from "./components/TeachinhSection.jsx";
import SectionButton from "./components/SectionButton.jsx";
import TabSection from "./components/TabSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import { useState } from "react";
import EffectSection from "./components/EffectSection.jsx";

function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header></Header>
      <main>
        <SectionButton></SectionButton>
        <TabSection active={tab} onChange={(current) => setTab(current)}/>
        {tab === "main" && (
          <>
            <TeachinhSection></TeachinhSection>
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection/>}
      </main>
    </>
  );
}

export default App;
